import { readFile } from 'fs/promises';

export async function processPart2(input) {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-03/input.txt';

  try {
    const dataFile = await readFile(elfFile, 'utf8');
    const dataArray = dataFile.trim().split('\n');

    // Step 1: Create the matrix array
    const matrixArray = dataArray.map(row => row.split(''));

    // Step 2-7: Loop through the matrix and perform the required operations
    let counter = 0;

    for (let row = 0; row < matrixArray.length; row++) {
      for (let col = 0; col < matrixArray[row].length; col++) {
        const cellValue = matrixArray[row][col];

        // Step 3: Store the [row][column] reference if the cell contains "*"
        if (cellValue === '*') {
          console.log("found * at "+ row + " , "+ col)
          // Step 4: Look at the eight squares around
          const neighbors = [
            [row - 1, col - 1], [row - 1, col], [row - 1, col + 1],
            [row, col - 1], [row, col + 1],
            [row + 1, col - 1], [row + 1, col], [row + 1, col + 1]
          ];
console.log(neighbors)
          const numbersArray = [];

          // Step 5: Check if any neighboring cells contain a number
          for (const [neighborRow, neighborCol] of neighbors) {
            if (
              neighborRow >= 0 && neighborRow < matrixArray.length &&
              neighborCol >= 0 && neighborCol < matrixArray[neighborRow].length &&
              !isNaN(matrixArray[neighborRow][neighborCol])
            ) {
              console.log("one of the numbers contained an array")
              // Step 5: Trigger the makeNumber function and add the result to an array
              const number = makeNumber(matrixArray, neighborRow, neighborCol);
              if(numbersArray.includes(number)){console.log("number already found, ignoring")} else {numbersArray.push(number);
              console.log("I made a number " + number)
              console.log("numbersArray is now " + numbersArray)}
            }
          }

          // Step 6: Check if the array contains exactly two non-identical numbers
          if (numbersArray.length === 2 && numbersArray[0] !== numbersArray[1]) {
            // Step 7: Multiply the numbers together and add them to the counter
            console.log("counter was " +counter)
            counter += numbersArray[0] * numbersArray[1];
            console.log("counter is now " +counter)
          }
        }
      }
    }

    console.log('Counter:', counter);
    return "Part 2: ";
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}

// Step 5: Extracted makeNumber function for clarity
function makeNumber(matrixArray, row, col) {
  let numberStartIndex = col;
  let numberEndIndex = col + 1;

  // Check left of the current cell
  while (numberStartIndex > 0 && !isNaN(matrixArray[row][numberStartIndex - 1])) {
    numberStartIndex--;
  }

  // Check right of the current cell
  while (numberEndIndex < matrixArray[row].length && !isNaN(matrixArray[row][numberEndIndex])) {
    numberEndIndex++;
  }

  // Slice the numeric sequence and join it into a string
  const number = matrixArray[row].slice(numberStartIndex, numberEndIndex).join('');
  console.log("the number starts with character " + numberStartIndex + " and ends with character "+ numberEndIndex);
  console.log("together that makes "+ number);
  return parseInt(number);
}
