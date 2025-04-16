const fs = require("fs");
const path = require("path");

const filename="text.txt"
const filepath=path.join(__dirname,filename)
// console.log(__dirname)
// const files=fs.writeFileSync(filename,"this is initial data,updated","utf-8");
// const read=fs.readFileSync(filename,"utf-8")
// console.log(read)

// const apendfile=fs.appendFileSync(filename,"My new file info")
// console.log(apendfile)

// const newfile=fs.unlinkSync(filename)
// console.log(newfile)
const newpath="test2.txt"
const newfilepath=path.join(__dirname,newpath);

const renamepath=fs.renameSync(filename,newfilepath)
console.log(renamepath)




