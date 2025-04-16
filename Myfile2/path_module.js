// const path=require("path");

// console.log(__dirname);
// console.log(__filename);
 
// const file=path.join("folder","student","data.txt")

// console.log(file);
// const parsedata=path.parse(file)
// const resolvepath=path.resolve(file)
// const extname=path.extname(file)
// const basename=path.basename(path)
// const dirname=path.dirname(file)
// console.log({parsedata,resolvepath,extname,basename,dirname})
const path = require("path");
console.log(__dirname);    // Prints the directory path
console.log(__filename);   // Prints the file path
const file = path.join("folder", "student", "data.txt");
console.log(file);         // folder\student\data.txt
const parsedata = path.parse(file);     // Returns an object with root, dir, base, ext, and name
const resolvepath = path.resolve(file); // Returns the absolute path
const extname = path.extname(file);     // Returns the file extension (.txt)
const basename = path.basename(file);   // Returns the file name with extension (data.txt)
const dirname = path.dirname(file);     // Returns the directory path (folder\student)
const sep=path.sep;

console.log({ parsedata, resolvepath, extname, basename, dirname,sep});
const os = require("os");
console.log('Free Memory:', (os.freemem() / (1024 * 1024 * 1024)).toFixed(2), "GB");
console.log("uptme",os.uptime(),"s")
console.log("homedir",os.homedir())
console.log("homedir",os.hostname())
// console.log("homedir",os.networkInterfaces())
console.log("homedir",os.cpus())
console.log("homedir",os.type())
console.log("homedir",os.tmpdir())
console.log('home',os.hostname)

