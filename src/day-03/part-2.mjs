import { readFile } from 'fs/promises';

export async function processPart2(input) {

  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-03/input.txt';

  try {
    const dataFile = await readFile(elfFile, 'utf8');
    //is character is *
      //if yes, check 8 spaces around
        // if a number is found, return a string that matches the regex \.[0-9]*\ and add it to an array.
        // 
    return "Part 2: "
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }


  return input;
}