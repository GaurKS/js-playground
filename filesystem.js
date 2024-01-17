// common usecases
// Read files
// Create files
// Update files
// Delete files
// Rename files

const { writeFile, appendFile, open, readFile, rename, copyFile } = require('fs/promises');
const { join } = require('path');


// Create and Write to a File
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
    await appendFile(fileName, data, { flag: 'a' });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: ${error.message}`);
  }
}

async function openFile(fileName, data) {
  try {
    const file = await open(fileName, 'w');
    await file.write(data);
    console.log(`Opened file ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to open the file: {error.message}`);
  }
}

writeToFile('files/friends.txt', 'Bob');
appendToFile('files/activities.txt', ' This is new text');
openFile('files/tasks.txt', 'Do homework');

// Reading a file
// this is asynchronous file read operation
async function readThisFile(filePath) {
  try {
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: {error.message}`);
  }
}

readThisFile('files/activities.txt');
readThisFile('files/friends.txt');
readThisFile('files/tasks.txt');


// Renaming a file
async function renameFile(from, to) {
  try {
    await rename(from, to);
    console.log(`Renamed ${from} to ${to}`);
  } catch (error) {
    console.error(`Got an error trying to rename the file: ${error.message}`);
  }
}

async function moveFile(from, to) {
  try {
    await rename(from, to);
    console.log(`Moved ${from} to ${to}`);
  } catch (error) {
    console.error(`Got an error trying to move the file: ${error.message}`);
  }
}
// renameFile('files/activity.txt', 'files/activities.txt');
// const fromPath = join(__dirname, "from", "move-me.txt");
// const destPath = join(__dirname, "to", "move-me.txt");
// moveFile(fromPath, destPath);


// copying file content
async function copyAFile(from, to) {
  try {
    await copyFile(from, to);
    console.log(`Copied ${from} to ${to}`);
  } catch (err) {
    console.error(`Got an error trying to copy the file: ${err.message}`);
  }
}


async function copyAll(fromDir, toDir, filePaths) {
  return Promise.all(filePaths.map(filePath => {
    return copyAFile(join(fromDir, filePath), join(toDir, filePath));
  }));
}
