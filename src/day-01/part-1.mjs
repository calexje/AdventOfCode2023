import { readFile } from 'fs/promises';

export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-01/input.txt';

  try {
    const dataFile = await readFile(elfFile, 'utf8');
    var counter = 0;
    var strippedList = dataFile.replace(/[a-z]/gi, '');
    var strippedArray = strippedList.split(/\r?\n/);
    var strippedArrayLength = strippedArray.length
    for (let i = 0; i< strippedArrayLength; i++){
      var figure = strippedArray[i].charAt(0) + strippedArray[i].charAt(strippedArray[i].length-1)
      counter += Number(figure)
    }
    return "Part 1: " + counter;
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
