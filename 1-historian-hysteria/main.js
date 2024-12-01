// node --watch ./1-historian-hysteria/main.js

import { readFile } from "node:fs/promises"

const data = await readFile("./1-historian-hysteria/puzzle-input.txt", "utf-8")
const lines = data.split("\n")

let leftNumbers = []
let rightNumbers = []

for (const line of lines) {
  const [leftNumber, rightNumber] = line.split(/\s+/).map(Number)
  leftNumbers.push(leftNumber)
  rightNumbers.push(rightNumber)
}

leftNumbers.sort()
rightNumbers.sort()

let totalDifference = 0
let similarityScore = 0

for (const [i] of lines.entries()) {
  const leftNumber = leftNumbers[i]
  const rightNumber = rightNumbers[i]

  totalDifference += Math.abs(rightNumber - leftNumber)
  similarityScore +=
    rightNumbers.filter(e => leftNumber === e).length * leftNumber
}

console.log({
  // Part 1
  totalDifference,

  // Part 2
  similarityScore,
})
