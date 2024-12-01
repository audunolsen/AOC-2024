// node --watch ./1-historian-hysteria/main.js

import { readFile } from 'node:fs/promises';
const data = await readFile("./1-historian-hysteria/puzzle-input.txt", 'utf-8');

let leftNumbers = []
let rightNumbers = []

for (const line of data.split('\n')) {
  const numbers = line.split("   "); // e.g. "15112   39680" -> ["15112", "39680"]
  const leftNumber = parseInt(numbers[0])
  const rightNumber = parseInt(numbers[1])

  leftNumbers.push(leftNumber) /** ["15112", "39680"][0] -> "15112" */  
  rightNumbers.push(rightNumber) /** ["15112", "39680"][1] -> "39680" */
}

leftNumbers = leftNumbers.sort()
rightNumbers = rightNumbers.sort()

let totalDifference = 0;
let similarityScore = 0;

for (let i = 0; i < leftNumbers.length; i++) {

  // Part 1
  const leftNumber = leftNumbers[i];
  const rightNumber = rightNumbers[i];

  console.log({ leftNumber, rightNumber })

  if (leftNumber > rightNumber) {
    totalDifference += leftNumber - rightNumber
  } else {
    totalDifference += rightNumber - leftNumber
  }

  // Part 2

  let matchCount = 0

  for (const rightNumber of rightNumbers) {

    if (leftNumber === rightNumber) {
      matchCount++
    }
  }

  similarityScore += leftNumber * matchCount
}

console.log({totalDifference, similarityScore})