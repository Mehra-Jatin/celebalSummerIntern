
const fs = require('fs').promises;
const path = require('path');

async function copyFileAsync(sourceFile, destinationFile) {
  try {
    // Resolve paths
    const srcPath = path.resolve(__dirname, sourceFile);
    const destPath = path.resolve(__dirname, destinationFile);

    // Read the source file
    const data = await fs.readFile(srcPath, 'utf8');

    // Write to the destination file
    await fs.writeFile(destPath, data);

    console.log(`File copied from ${sourceFile} to ${destinationFile}`);
  } catch (error) {
    console.error('❌ Error during file operation:', error.message);
  }
}

// Run the function
copyFileAsync('source.txt', 'destination.txt');
