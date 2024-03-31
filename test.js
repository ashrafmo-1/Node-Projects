// const fs = require("node:fs")
// console.log("hello ashraf can help you?");
// console.log(process.argv[2]);
// console.log(process.argv);

// // can't use this example because it false
if(process.argv[2] === "jsLessons") {
  let FileData = fs.readFile("file", "utf-8", (err, data) => {})
}

// use commander in this case

program
  .command("add")
  .alias('plus')
  .description("add new item")
  .argument("<id>", "add unique id")
  .argument("<title>", "add new item")
  .option("--count <count>", "count items")
  .action((e, option, count) => {
    console.log("element: ", e);
    console.log("option: ", option);
    console.log("count: ", count);
  })
program.parse(process.argv);