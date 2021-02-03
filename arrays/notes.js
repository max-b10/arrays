const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eat a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];
// console.log(notes);

// This findNote function uses find() to return the array which matches the
// search parameter ('office modification' in this example).
const findNote = function (arrayName, objectTitle) {
  return arrayName.find(function (item, index) {
    return item.title.toLowerCase === objectTitle.toLowerCase;
  });
};
const note = findNote(notes, "OFFice modIficATion");
console.log(note);

// This findNote function uses findIndex() to return the array which matches the
// search parameter ('office modification' in this example).
// The index variable defined is a -1 if not found.
const findNote = function (arrayName, objectTitle) {
  const index = arrayName.findIndex(function (item, index) {
    return item.title.toLowerCase === objectTitle.toLowerCase;
  });
  return arrayName[index];
};

// const note = findNote(notes, "OFFice modIficATion");
// console.log(note);

// Here, when console.logging findIndex(), it prints all items
// until it finds the one being searched for.
// const index = notes.findIndex(function (item, index) {
//   //   console.log(item);
//   //   console.log(item);
//   return item.title === "Habits to work on";
// });
// console.log(index);
// const notes = ["Note 1", "Note 2", "Note 3"];

// for (let i = 0; i < notes.length; i++) {
//   console.log(notes[i]);
// }

// notes.forEach(function (item, index) {
//   console.log(item);
//   console.log(index);
// });

// notes[2] = "This is the new Note 3";
// notes.pop(); //remove item from end of array.
// notes.push("New Note"); //add item onto end of array.
// notes.shift(); //remove first item from array.
// notes.unshift("New first Note"); //add item onto beginning of array.

// notes.splice(1, 1); //start of index of '1' and remove '1' item.
// notes.splice(1, 0, "New Note 2"); //start at index of '1', remove nothing and add the string.

// console.log(notes.length); //length of array.
// console.log(notes[notes.length - 1]); //last item in array.
