/*
    Created at : 2024.01.11
    Created by : Onur DÖKER
    Updated by : Onur DÖKER

    Description :   Description : Calculate the average of the scores, determine the grade of the student, check if the student has a passing grade, and return a message to the student based on their score.

    It was created using FreeCodeCamp's "JavaScript Fundamentals by Building a Gradebook App" course.
*/
// Part 1
function getAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}
// part 2
function getGrade(score) {
  if (score == 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
// part 3
function hasPassingGrade(score) {
  if (getGrade(score) == "F") {
    return false;
  } else {
    return true;
  }
}
//part 4
function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores);
  let grade = getGrade(studentScore);
  let passing = hasPassingGrade(studentScore);
  if (passing == true) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
