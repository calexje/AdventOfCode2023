import { readFile } from 'fs/promises';

export async function processPart1() {
  const inputs = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-02/input.txt';
  try {
    var counterTotal = []
    const dataFile = await readFile(inputs, 'utf8');
    var removeFirst = dataFile.replaceAll(/(.*\:) /g,"")
    const dataArray = removeFirst.split("\n")
    for (let i = 0; i <dataArray.length;i++) {
      var game = i;
      var dataGameResults = dataArray[i].split(";")
      
        for (let j = 0; j <dataGameResults.length;j++) {
      var gameResult = dataGameResults[j].split(",")  
      const transformedResult = gameResult.map((pair) => {
      const [quantity, colour] = pair.trim().split(' ');
      return { [colour]: parseInt(quantity, 10) };
      });
  
      //Create a final object with game ID and color-quantity pairs
      const finalObject = { game: `${i}-${j}` };
      transformedResult.forEach((obj) => Object.assign(finalObject, obj));
      console.log(finalObject);
      if(finalObject.red>12){
        console.log("game: "+[i+1]+"-"+[j+1]+" is not valid - too many reds")
        counterTotal.push(i+1)
      }
      else if (finalObject.green>13) {
        console.log("game: "+[i+1]+"-"+[j+1]+" is not valid - too many greens")
        counterTotal.push(i+1)
      }
      else if (finalObject.blue>14) {
        console.log("game: "+[i+1]+"-"+[j+1]+" is not valid - too many blues")
        counterTotal.push(i+1)
      }
    }
console.log(counterTotal)
}
let finalCounter = 0
for (let k = 0; k <=100;k++) {
  if (counterTotal.includes(k)) {
  }
  else {
    finalCounter += k
  }
}
    return "Part 1: " + finalCounter;
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
