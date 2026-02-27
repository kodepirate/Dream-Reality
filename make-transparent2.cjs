const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\anike\\.gemini\\antigravity\\brain\\bd99aea4-4668-4051-bfe5-105487b3de87\\dubai_reality_logo_1772121415492.png';
const outputPath = 'C:\\Users\\anike\\Desktop\\Dream-Reality\\src\\assets\\dubai_reality_logo_transparent.png';

async function makeTransparent() {
    try {
        // We are going to strictly isolate the white/copper colors 
        // and make everything that is "blue" or "dark" transparent

        await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];

                    // The logo seems to have white and copper elements.
                    // the "blue background" or dark background needs to be removed.
                    // A simple heuristic: if it's mostly blue/dark, it's background.
                    // Copper is High R, Med G, Low B. White is High RGB.

                    // Let's preserve pixels that are:
                    // 1. Very bright (white)
                    // 2. Copper (High red, lower blue)

                    const isWhite = r > 200 && g > 200 && b > 200;
                    const isCopper = r > 100 && g < 180 && b < 100 && r > b;
                    // Let's just say anything that is predominantly blue or just generally dark is background
                    const isBackground = (b > r + 20) || (r < 80 && g < 80 && b < 80) || (r < 150 && g < 150 && b < 150 && b >= r);

                    if (isBackground && !isWhite && !isCopper) {
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

        console.log('Successfully refined background transparency: ' + outputPath);
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

makeTransparent();
