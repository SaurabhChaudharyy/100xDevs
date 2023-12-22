// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
var fs = require("fs");
let filePath = "./text.txt";
function cleanFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err, "Error in reading file");
      return;
    }
    let modifiedString = data.replace(/\s+/g, " ").trim();
    console.log(modifiedString);
  });
}

cleanFile(filePath);
