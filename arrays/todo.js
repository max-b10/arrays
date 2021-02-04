const toDos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean Kitchen",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
  {
    text: "Do some work",
    completed: false,
  },
  {
    text: "Got to bed",
    completed: true,
  },
];
// console.log(toDos);

//Create function using filter() to show all toDos which have not been completed.
const getThingsToDo = function (arrayName) {
  return arrayName.filter(function (object, index) {
    return object.completed === false;
  });
};

console.log(getThingsToDo(toDos));

// Create a function to remove a toDo by text value
// Callback function looking for variable with: findIndex().

// const removeToDo = function (arrayName, objectText) {
//   const index = arrayName.findIndex(function (item) {
//     return item.text.toLowerCase() === objectText.toLowerCase();
//   });
//   if (index > -1) {
//     return arrayName.splice(index, 1);
//   }
// };

// removeToDo(toDos, "Exercise");
// console.log(toDos);

// for (let i = 0; i < toDos.length; i++) {
//   let num = i + 1;
//   let toDo = toDos[i];
//   console.log(`${num}. ${toDo}`);
// }

// toDos.forEach(function (item, index) {
//   const num = index + 1;
//   console.log(`${num}. ${item}`);
// });

// toDos.splice(2, 1);
// toDos.push("Hello");
// toDos.shift();
// console.log(`You have: ${toDos.length} toDos.`);
// console.log(toDos[0]);
// console.log(toDos[4]);
// console.log(toDos.length - 1);
