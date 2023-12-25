import { readFile } from 'fs/promises';

export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-04/input.txt';

  try {
  var scoreTotal = 0 //total score
    var scoreValue= 0 //round score
    const dataFile = await readFile(elfFile, 'utf8');
    const sanitiseFile = dataFile.replaceAll("  "," 0")
    const dataArray = sanitiseFile.split("\n")
    
    for(let i = 0; i < dataArray.length;i++){
var winningString = dataArray[i].replace(/.*\:/,"").split("|")[0].trim().split(" ")
var ourString = dataArray[i].replace(/.*\:/,"").split("|")[1].trim().split(" ")
for (let j = 0; j <ourString.length;j++){
  if(winningString.includes(ourString[j])&&scoreValue>=1) {
    
    
    
    
    scoreValue=scoreValue*2
    
    
    
    
  }else if (winningString.includes(ourString[j])) {
    
    
    
    
    scoreValue=1
    
    
    
    
  }
}



scoreTotal = scoreValue+scoreTotal
scoreValue=0


}




    return "Part 1: "
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;

  }
  
}
