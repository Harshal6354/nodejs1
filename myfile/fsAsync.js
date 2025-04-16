const fs = require("fs");
const os = require("os");
// // const path = require("path");

// // const filename = "FSAsync.txt";
// // // const filepath=path.join(__dirname,filename)
// // console.log(filename);
// // console.log("1");
// // fs.readFile("test.txt", "utf-8", (err, result) => {
// //   console.log(result);
// // });

// // console.log("2");
// console.log(os.endianness());

fs.readFile("log3.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log(os.freemem());
