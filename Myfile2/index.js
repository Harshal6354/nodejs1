// let arr=[22,33,32,66]
// console.log(arr.map((num)=>num*5))
// console.log(global)
// global.console.log("new car");
// console.log(module)
// const add=require("./math");
// const sub=require("./math");
const {add,sub,mul,PI}=require("./math")

console.log(add(5,10));
console.log(sub(5,10));
console.log(mul(10,10));
console.log(PI)
// common js
const mat=require("./math")
console.log(mat.add(5,10));
console.log(mat.sub(5,10));
console.log(mat.mul(10,10));
console.log(mat.right);
console.log(mat.mul(12,33+23))