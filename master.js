import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import { table } from "console";

const jsonFilePath = "./file.json";
const program = new Command();
const quistions = [
  {
    type: "input",
    name: "id",
    message: "add unique id:",
  },
  {
    type: "input",
    name: "Item name",
    message: "Add new item:",
  },
  {
    type: "input",
    name: "list name",
    message: "chose the corect: ",
  },
];

program
  .name("alixa help")
  .description("CLI to some JavaScript help humen")
  .version("0.8.0");

program
  .command("add")
  .alias("plus")
  .description("add new item")
  .action((e) => {
    inquirer.prompt(quistions).then((answer) => {
      if (fs.existsSync(jsonFilePath)) {
        fs.readFile(jsonFilePath, "utf8", (err, FileData) => {
          if (err) {
            console.log(new Error(err));
            process.exit();
          } else {
            console.log(">>>> you have existing json file <<<< \n File data: ", FileData);
            const FileContentJSON = JSON.parse(FileData);
            FileContentJSON.push(answer);
            fs.writeFile(jsonFilePath, JSON.stringify(FileContentJSON), "utf8", () => {
              console.log("sucessfilly! your data was saved: ", answer);
            });
          }
        });
      } else {
        fs.writeFile(jsonFilePath, JSON.stringify([answer]), "utf8", (errors) => {
          if (errors) {
            throw new Error(errors);
          } else {
            console.log("sucessfilly! your data was saved: ", answer);
          }
        });
      }
    });
  });

program
.command("list")
.alias("L")
.description("file list")
.action(() => {
  fs.readFile(jsonFilePath, "utf8", (err, tableContent) => {
    if (err) {
      console.log("Oops! Something went Error: ", err);
      process.exit();
    }
    console.table(JSON.parse(tableContent))
  })
})
program.parse(process.argv);