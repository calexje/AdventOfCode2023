import { debug } from 'console';
import { readFile } from 'fs/promises';
import next from 'next';

export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-09/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const lines = dataFile.split("\n");

  let difference;
  let differenceArray = [];
  let differenceSum = 0;
  let runningTotal = 0;
  let walkingTotal=0;
  let maxDifference
  let minDifference
  let nextDifference = 0;
  let prevDifferenceArray =[];


  try {
    for (let row = 0; row < lines.length; row++) {
      // Splitting row into individual items
      const values = lines[row].split(" ");
      let currentArray = values.map(Number); // Convert strings to numbers
      prevDifferenceArray.push(currentArray[0])
      // Initialize found variable
      let found = false;

      do {
        // Logic for finding difference between values
        for (let value = 1; value < currentArray.length; value++) {
          difference = currentArray[value] - currentArray[value - 1];
          differenceSum += difference;
          differenceArray.push(difference);
        }

        // Add the last value of differenceArray to nextDifference
        nextDifference += differenceArray[differenceArray.length - 1];
        // Escape logic
        maxDifference = Math.max(...differenceArray)
        minDifference = Math.min(...differenceArray)
        if (minDifference == maxDifference) {
          let nextValue = parseInt(values[values.length - 1]) + parseInt(nextDifference);
          runningTotal += nextValue;
          found = true;
        }
        currentArray = differenceArray;
        prevDifferenceArray.push(currentArray[0])
        differenceSum=0
        differenceArray = [];
      } while (!found);
      nextDifference = 0
      // Cleanup
      differenceSum = 0;
      maxDifference = 0
      minDifference = 0
    }

    console.log("Ranges finished, returning");
    console.log("Final value for part 1 is " + runningTotal);
    return runningTotal
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
