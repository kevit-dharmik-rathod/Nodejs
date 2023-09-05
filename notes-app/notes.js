const fs = require("fs");
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const addNote = function (title, body) {
  const notes = loadNote();
  debugger;
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Added a new note");
  } else {
    console.log("note title already taken try something different");
  }
};

const removeNote = function (title) {
  const notes = loadNote();
  //   console.log("notes array is ", notes);
  if (notes.length !== 0) {
    const found = notes.findIndex((x) => {
      return x.title === title;
    });
    // console.log("found index is " + found);
    if (found !== -1) {
      notes.splice(found, 1);
      saveNotes(notes);
      console.log("Removed a note successfully");
    } else {
      console.log("no note found with this title");
    }
  } else {
    console.log("Note array is empty");
  }
};

const listNotes = function () {
  const notes = loadNote();
  if (notes.length === 0) {
    console.log("Notes array is empty nothing to show");
  } else {
    notes.forEach((x) => console.table(x));
  }
};
const updateNote = function (title, body) {
  const notes = loadNote();
  if (notes.length === 0) {
    console.log("Notes array is empty ");
  } else {
    const x = notes.find((x) => x.title === title);
    if (x) {
      if (body !== undefined && body !== "") {
        x.body = body;
        saveNotes(notes);
        console.log("Successfully update the note");
      } else {
        console.log("Given body either empty string or not given");
      }
    } else {
      console.log("Given title not found in the list");
    }
  }
};
const loadNote = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = JSON.parse(dataBuffer.toString());
    return data;
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  updateNote: updateNote,
};
