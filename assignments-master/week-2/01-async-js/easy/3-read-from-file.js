// Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

var fs = require("fs").promises;
async function readAndWrite(filePath) {
  try {
    await fs.writeFile(
      filePath,
      "this is the new addition to the data",
      "utf-8"
    );
    console.log("file has been successfully updated");
    const data = await fs.readFile(filePath, "utf-8");
    console.log("the modified string is " + data);
    let i = 0;
    for (i = 0; i < 100000000000000; i++) {
      i = i + 1;
    }
    console.log(i);
  } catch (error) {
    console.log("Error in reading the data from the file.", error.message);
  }
}

const filePath = "./a.txt";
console.log("this is a synchronous output");
readAndWrite(filePath);
