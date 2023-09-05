const notes = require("./notes");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Add command for notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    notes.addNote(yargs.argv.title, yargs.argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    const title = yargs.argv.title;
    notes.removeNote(title);
  },
});
yargs.command({
  command: "list",
  describe: "Listing notes..",
  handler: function () {
    notes.listNotes();
  },
});
yargs.command({
  command: "update",
  describe: "updating a note",
  builder: {
    title: {
      describe: "title for updating",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "updating body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    const title = yargs.argv.title;
    const body = yargs.argv.body;
    notes.updateNote(title, body);
  },
});
// console.log(yargs.argv);
yargs.parse();
