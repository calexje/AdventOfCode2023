import { readFile } from 'fs/promises';

export async function processPart2(input) {

  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-03/input.txt';

  try {
    const dataFile = await readFile(elfFile, 'utf8');
    var counter = 0;
    var alphaToNum = dataFile.replaceAll('one','on1e')
                              .replaceAll('two','tw2o')
                              .replaceAll('three','thre3e')
                              .replaceAll('four','fou4r')
                              .replaceAll('five','fiv5e')
                              .replaceAll('six','si6x')
                              .replaceAll('seven','seve7n')
                              .replaceAll('eight','eigh8t')
                              .replaceAll('nine','nin9e')
    var strippedList = alphaToNum.replace(/[a-z]/gi, '');
    console.log("List"+strippedList)    
    var strippedArray = strippedList.split(/\r?\n/);
    var strippedArrayLength = strippedArray.length
    for (let i = 0; i< strippedArrayLength; i++){
      var figure = strippedArray[i].charAt(0) + strippedArray[i].charAt(strippedArray[i].length-1)
      counter += Number(figure)
    }
    return "Part 2: " + counter;
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }

// pseudo 
//2a) grab list as array
//2b) .replace "one" as "on1e", two as "tw2o" etc (reason will become obvious shortly)
//2c) see 1b-1e
//1c)loop through each item in the list get a length
//1d) .split() each item, concat item[0] and item[length]
//1e) add the value to a variable, return to 1c) until I finish the original array
  return input;
}