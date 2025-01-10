/*
 Created at : 2024.01.10
    Created by : Onur DÖKER
    Updated by : Onur DÖKER

    Description : This is a simple program that creates a pyramid shape using the "#" character.
    The number of rows and the character used can be changed by modifying the "count" and "character" variables.
    The pyramid can be inverted by changing the "inverted" variable to false.

    It was created using FreeCodeCamp's "JavaScript Algorithms and Data Structures" course.
*/

const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";
for (const row of rows) {
  result = result + row + "\n";
}
console.log(result);
