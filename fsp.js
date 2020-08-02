const fs = require('fs');
const fsPromises = fs.promises;

console.log('1: ' + fs.readFileSync('teste.txt', 'utf8'));
// Prints: Node.js

async function doTruncate() {
  let filehandle = null;
  try {
    filehandle = await fsPromises.open('teste.txt', 'r+');
    await filehandle.truncate(4);
  } finally {
    if (filehandle) {
      // Close the file if it is opened.
      await filehandle.close();
    }
  }
  console.log('2: ' + fs.readFileSync('teste.txt', 'utf8'));  // Prints: Node
}

doTruncate().catch(console.error);