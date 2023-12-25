import { readFile } from 'fs/promises';

export async function processPart2(input) {

  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-00/input.txt';

  try {
    var dataArray= "no project loaded" 
    console.log(dataArray)
    return "Part 2: " + dataArray;
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
  return input;
}