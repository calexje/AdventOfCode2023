import { time } from 'console';
import { readFile } from 'fs/promises';
export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-05/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  

  try {

    return "Part 1: "
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
