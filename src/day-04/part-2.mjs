import { readFile } from 'fs/promises';

export async function processPart2(input) {

  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-04/input.txt';

  try {
    const dataFile = await readFile(elfFile, 'utf8');
    //list of scratchcard IDs to be scratched, 1-200
    //check scratchcard by ID
    //use same isIn tech to confirm if scratchcard wins
    //increment pointsCounted by 1
    //append scratchcardID + pointsCounted to the ID list if value is less than 200, else ignore
    //return to step 1


    return "Part 2: "
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }


  return input;
}