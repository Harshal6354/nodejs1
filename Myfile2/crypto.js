// const crypto=require("crypto")

// // const randomvalue=crypto.randomBytes(8).toString("hex")

// // console.log(randomvalue)
// const hashvalue=crypto.createHash("sha256").update("harshal").digest("hex")
// console.log(hashvalue)

const os = require("os");

console.log(os.cpus().length);
