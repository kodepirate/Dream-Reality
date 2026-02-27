const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\anike\\.gemini\\antigravity\\brain\\0aae5172-81cf-48a0-9285-05afec81ff8f\\dubai_dream_reality_new_logo_1772170653204.png';
const outputPath = 'C:\\Users\\anike\\Desktop\\Dream-Reality\\src\\assets\\dubai_dream_reality_new_logo_transparent.png';

async function makeTransparent() {
    try {
        await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];

                    // Remove white/light grey background, keep dark pixels intact
                    const isLight = r > 200 && g > 200 && b > 200;

                    if (isLight) {
                        data[i + 3] = 0; // Set alpha to 0 for light pixels
                    }
                }
                return sharp(data, {
                    raw: {
                        width: info.width,
                        height: info.height,
                        channels: 4
                    }
                }).toFile(outputPath);
            });

        console.log('Successfully made background transparent: ' + outputPath);
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

makeTransparent();
