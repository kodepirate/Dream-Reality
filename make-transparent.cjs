const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\anike\\.gemini\\antigravity\\brain\\bd99aea4-4668-4051-bfe5-105487b3de87\\dubai_reality_logo_1772121415492.png';
const outputPath = 'C:\\Users\\anike\\Desktop\\Dream-Reality\\src\\assets\\dubai_reality_logo_transparent.png';

async function makeTransparent() {
    try {
        // 1. Convert to RGBA
        // 2. Identify the very dark #0f0f11 background and turn it transparent
        // Sharp can use a smart thresholding technique or color extraction
        await sharp(inputPath)
            .ensureAlpha()
            // Instead of manual pixel manipulation, composite it using screen/lighten 
            // or extract the lightest parts if it's a solid background
            .toColourspace('srgb')
            .flatten({ background: { r: 255, g: 255, b: 255 } }) // Just as a pre-step if needed
            // Actually, since the user wants the exact logo just without the dark BG, 
            // let's use a simpler approach - we'll just write it directly and I'll use CSS mix-blend-mode 
            // OR I can generate a new one specifically with a white background and use multiply,
            // But let's actually just use Sharp to replace near-black pixels with transparent.

            .raw()
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    // If the pixel is very dark (close to black / #0f0f11)
                    if (r < 30 && g < 30 && b < 30) {
                        data[i + 3] = 0; // Make transparent
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
