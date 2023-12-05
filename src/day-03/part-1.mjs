import { readFile } from 'fs/promises';

export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-03/input.txt';

  try {
    const dataFile = await readFile(elfFile, 'utf8');
    var currentInput = ""
    var saveInput = false
    var currentCount = 0
    var symbols = /(\*|\/|\-|\@|\$|\=|\%|\+|\#|\&)/
    const dataArray = dataFile.trim().split('\n');
    var matrixArray = dataArray.map(row => row.split(''));
    const getValue = (row, col) => matrixArray[row][col];
    
    for (let i = 0;i<=dataArray.length;i++){
      const row = dataArray[i].split('')
      matrixArray.push(row)
      
      for (let row = 0;row <= matrixArray.length;row++) {
        for (let col = 0;col <= dataArray.length;col++) {
          const cellValue = matrixArray[row][col];
          if (!isNaN(cellValue)) {
            if (
              (row < matrixArray.length - 1 && symbols.test(matrixArray[row + 1][col])) ||
              (row > 0 && symbols.test(matrixArray[row - 1][col])) ||
              (col < matrixArray[row].length - 1 && symbols.test(matrixArray[row][col + 1])) ||
              (col > 0 && symbols.test(matrixArray[row][col - 1])) ||
              (row < matrixArray.length - 1 && col < matrixArray[row].length - 1 && symbols.test(matrixArray[row + 1][col + 1])) ||
              (row > 0 && col > 0 && symbols.test(matrixArray[row - 1][col - 1])) ||
              (row > 0 && col < matrixArray[row].length - 1 && symbols.test(matrixArray[row - 1][col + 1])) ||
              (row < matrixArray.length - 1 && col > 0 && symbols.test(matrixArray[row + 1][col - 1]))
            ) {
              saveInput = true
            } 
            currentInput+= String(cellValue)
          } else {
            if(saveInput){
              currentCount+=Number(currentInput)
              //console.log("We added "+currentInput+", the current value is " +currentCount)
            }
          currentInput=""
          saveInput = false
          }
        }
      }
    }

    //Start row 1 character 1:
    //1) Check if the current character is a number. If so, move to 2), If not, move to 3). 
    //2) Append it to currentInput, then check the eight directions for a symbol. If you find one, set saveInput to True.
    //3) Check to the right. If you find a number, repeat 2). If you find anything else, move to 4)
    //4) Check the value of saveInput. If it's True, add currentInput to currentCount. If it's false, do nothing
    //5) Reset currentInput to a blank string and saveInput to False. Move to the next character and repeat 1).

    return "Part 1: "+currentCount
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
