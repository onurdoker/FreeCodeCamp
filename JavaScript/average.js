/*
    Created at : 2024.01.11
    Created by : Onur DÖKER
    Updated by : Onur DÖKER

    Description : Calculate the average of the numbers in

    It was created using FreeCodeCamp's "JavaScript Fundamentals by Building a Gradebook App Part 1" course.
*/
function getAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
