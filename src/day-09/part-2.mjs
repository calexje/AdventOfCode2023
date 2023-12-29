import { debug } from 'console';
import { readFile } from 'fs/promises';
import next from 'next';

export async function processPart2() {
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
  let prevValue = 0


  try {
    for (let row = 0; row < lines.length; row++) {
      // Splitting row into individual items
      const values = lines[row].split(" ");
      console.log("=========== New Array =========")
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
        console.log("Prev difference array" + prevDifferenceArray)
        differenceSum=0
        differenceArray = [];
      } while (!found);
      let subtractorValue=prevDifferenceArray.pop()
      console.log(subtractorValue)
      nextDifference = 0
      // Cleanup
      differenceSum = 0;
      maxDifference = 0
      minDifference = 0
      for (let i = prevDifferenceArray.length-1;i>=0;i--){
        subtractorValue = parseInt(prevDifferenceArray[i])-parseInt(subtractorValue)
      }
      console.log("previous value would have been "+ subtractorValue)
      console.log("========")
      console.log("Walking total was "+walkingTotal)
      walkingTotal+=subtractorValue
      console.log("Walking total is now "+walkingTotal)
      prevDifferenceArray=[]
    }

    console.log("Ranges finished, returning");
    console.log("Running Total is " + runningTotal);
    console.log("Walking Total is " + walkingTotal)
    return walkingTotal
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
