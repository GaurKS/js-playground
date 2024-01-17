

// common usecases
// Read files
// Create files
// Update files
// Delete files
// Rename files

const { writeFile, appendFile } = require('fs/promises');

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: 'w' });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: ${error.message}`);
  }
}

writeToFile('files/friends.txt', 'Bob');
appendToFile('files/activities.txt', 'Skiing')