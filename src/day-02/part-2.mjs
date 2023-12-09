import { readFile } from 'fs/promises';

export async function processPart2(input) {
  const inputs = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-02/input.txt';
  var powerLevel = 0;
  try {
    const dataFile = await readFile(inputs, 'utf8');
    const removeFirst = dataFile.replaceAll(/(.*\:) /g,"")
    const semiColonToComma = removeFirst.replaceAll(/(;) /g,", ")
    const dataArray = semiColonToComma.split("\n")
    const games= [];
    var powerLevel = 0
    
    for (let i = 0; i <dataArray.length;i++) {
      var dataGameResults = dataArray[i].split(",").map((result )=> result.trim());
      const gameObj = {}
      dataGameResults.forEach((result) => {
        const [quantity=0,colour] = result.split(' ');
        const value = parseInt(quantity,10);
          if (gameObj[colour]) {
            gameObj[colour] = Math.max(gameObj[colour],value);
          } else {
            gameObj[colour] = value;
          }
      });
      games.push(gameObj);
    var power = gameObj.red * gameObj.blue * gameObj.green;
      console.log(`Game ${i}:`, gameObj);
      console.log(`Game ${i} max red is ${gameObj.red} max blue is ${gameObj.blue} max green is ${gameObj.green}. Multiply those together for ${power}`);
      console.log(`I added ${power} for Game ${i}. The new level is ${powerLevel + power}`);
      powerLevel += power;
    }

    return "Part 2: " + dataArray;
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
