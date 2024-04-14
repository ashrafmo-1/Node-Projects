// node js hava a builtin server not have to import any server out
const http = require("node:http"); // http server module
const fs = require("node:fs");

const home = fs.readFileSync("./app/index.html", "utf8")
// node server
const serv = http.createServer((req, res) => {
  // if (res.end("ss")) {
  //   console.log("welcom to home page");
  // } else if (res.end("/skills")) {
  //   console.log("skills js ts css sass scss");
  // }
  // res.write("end server");
  // res.write("<h1>hello html</h1>")
  // res.write('./app/index.html') // error
  if (req.url === "/home") {
    res.write(home)
  } else if (req.url === "/contact") {
    res.write("<h1>hello conact pro</h1>")
  } else if (req.url === "/x") {
    res.write("<h1>hello x pro</h1>")
  }else {
    res.write("<h1>ERR</h1>")
  }
  console.log(req.url);
  res.end();
})

serv.listen(1000, () => {
  console.log("listen server on post 1000");
})