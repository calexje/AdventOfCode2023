import { readFile } from 'fs/promises';

export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-04/input.txt';

  try {
  var scoreTotal = 0 //total score
    var scoreValue= 0 //round score
    const dataFile = await readFile(elfFile, 'utf8');
    const sanitiseFile = dataFile.replaceAll("  "," 0")
    const dataArray = sanitiseFile.split("\n")
    console.log(dataArray)
    for(let i = 0; i < dataArray.length;i++){
var winningString = dataArray[i].replace(/.*\:/,"").split("|")[0].trim().split(" ")
var ourString = dataArray[i].replace(/.*\:/,"").split("|")[1].trim().split(" ")
for (let j = 0; j <ourString.length;j++){
  if(winningString.includes(ourString[j])&&scoreValue>=1) {
    console.log("********** INDIVIDUAL NUMBER BEING CHECKED***********")
    console.log("the number being checked is " + ourString[j])
    console.log("number "+[j]+" in the list "+ourString)
    console.log("value is included, current score being incremented. Score was " + scoreValue)
    scoreValue=scoreValue*2
    console.log("score increment finished, current value"+scoreValue)
    console.log("current round is "+i)
    console.log(ourString[j]+" is a winner")
    console.log("********** END OF INDIVIDUAL NUMBER BEING CHECKED***********")
  }else if (winningString.includes(ourString[j])) {
    console.log("********** INDIVIDUAL NUMBER BEING CHECKED***********")
    console.log("the number being checked is " + ourString[j])
    console.log("number "+[j]+" in the list "+ourString)
    console.log("value is included, current score being incremented. Score was " + scoreValue)
    scoreValue=1
    console.log("score increment finished, current value"+scoreValue)
    console.log("current round is "+i)
    console.log(ourString[j]+" is a winner")
    console.log("********** END OF INDIVIDUAL NUMBER BEING CHECKED***********")
  }
}
console.log("********** END OF ROUND***********")
console.log("the final round score is "+scoreValue)
console.log("We add that to "+scoreTotal)
scoreTotal = scoreValue+scoreTotal
scoreValue=0
console.log("value reset")
console.log("********** END OF ROUND***********")
}
console.log("********** END OF GAME***********")
console.log("Now we're out of the loop this should print once")
console.log("The final score is"+scoreTotal)
console.log("********** END OF GAME***********")
    return "Part 1: "
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;

  }
  
}
