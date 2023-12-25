import { readFile } from 'fs/promises';

export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-00/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  let charArray = dataFile.split("")
  console.log(charArray)
  let currentFloor=0
  for (let i = 0;i < charArray.length;i++){
    if(charArray[i] =='('){
      currentFloor = currentFloor+1
    } else if ( charArray[i] == ")"){
      currentFloor = currentFloor-1
    }
      if(currentFloor <0) {
        console.log(i + " position is below 1")
      }
  }
  try {
    var dataArray= "no project loaded!" 

    return "Part 1: "
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
