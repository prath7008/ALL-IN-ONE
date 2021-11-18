const chalk = require("chalk");
const yargs = require("yargs");
const 
const getNotes = require("./notes.js");

//Create ADD Command

yargs.command({
  command: "add",
  describe: "ADD a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Buddy",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title", argv.title);
    console.log("Body:" + argv.body);
  },
});

//Create Remove Command

yargs.command({
  command: "remove",
  describe: "Remove a Note",
  handler: function () {
    console.log("Reomving a Note");
  },
});

//Create List Command
yargs.command({
  command: "list",
  describe: "Listing  your  Notes",
  handler: function () {
    console.log("Listing out all Notes");
  },
});

//Create Read Command
yargs.command({
  command: "read",
  describe: "Read a Note",
  handler: function () {
    console.log("Reading a Note");
  },
});
//
// add, remove , read , list

console.log(yargs.argv);
