// const http = require("http");
// const fs = require("fs");

// const myserver = http.createServer((req, res) => {
//   const log = `${Date.now()}: new req receive\n`;
//   fs.appendFile("log.txt", log, (err) => {
//     console.log("error");
//   });
//   res.end("hello from server again");
// });

// myserver.listen(8001, () => console.log("server started"));

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myserver = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();

//   const log = `${Date.now()}:${req.url} new req received\n`;
//   const myurl = url.parse(req.url, true);
//   console.log(myurl);

//   fs.appendFile("log3.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("home");
//         break;
//       case "/about":
//         const username = myurl.query.myname;
//         req.end(`hello ${username}`);
//         break;
//       default:
//         res.end("404 not found");
//     }
//   });
// });

// myserver.listen(8001, () => console.log("server started"));

const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  return res.send("hello from home page");
});
app.get("/about", (req, res) => {
  return res.send("about");
});
// function handler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();

//   const log = `${Date.now()}:${req.url} new req received\n`;
//   const myurl = url.parse(req.url, true);
//   console.log(myurl);

//   fs.appendFile("log3.txt", log, (err) => {
//     if (err) console.error("Error writing log:", err);

//     switch (myurl.pathname) {
//       case "/":
//         res.end("home");
//         break;
//       case "/about":
//         const username = myurl.query.myname || "Guest"; // Default value if `myname` is missing
//         res.end(`hello ${username}`);
//         break;
//       default:
//         res.end("404 not found");
//     }
//   });
// }
const myserver = http.createServer(app);

myserver.listen(5000, () => console.log("server started"));
