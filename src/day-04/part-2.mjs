import { debug } from 'console';
import { readFile } from 'fs/promises';

export async function processPart2() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-04/input.txt';

  try {
  var scoreTotal = 0 //total score
  var scoreValue = 0
  var replacementArray = []
  var numberReplacement = {};
    const dataFile = await readFile(elfFile, 'utf8');
    const sanitiseFile = dataFile.replaceAll("  "," 0")
    const dataArray = sanitiseFile.split("\n")
    console.log(dataArray)
    
    //setting up initial loop 
    for(let i = 0; i < dataArray.length;i++){
    replacementArray.push(i+1)
var winningString = dataArray[i].replace(/.*\:/,"").split("|")[0].trim().split(" ")
var ourString = dataArray[i].replace(/.*\:/,"").split("|")[1].trim().split(" ")
let currentArray = []
for (let j = 0; j <ourString.length;j++){
    //if the winning string is present
  if(winningString.includes(ourString[j])&&i<dataArray.length) {
    currentArray.push(i+2+scoreValue)
    scoreValue++
    console.log(currentArray)
  } else if (i==dataArray.length) {console.log("we don't add after 200")}
}
numberReplacement[i+1] = currentArray
scoreTotal+=1
scoreValue=0
}
console.log("Exiting initial loop")
console.log("I have a list of " + replacementArray.length+ " Numbers, starting at " + replacementArray[0])
console.log(numberReplacement)

let initialList = Array.from({ length: 200 }, (_, index) => index + 1);

for (const key in numberReplacement) {
    console.log("viewing " + key);
    if (numberReplacement.hasOwnProperty(key)) {
      const replacementValues = numberReplacement[key];
      console.log("there are " + replacementValues.length + " for key " + key + " - " + replacementValues)
      const occurrences = initialList.filter(value => value === parseInt(key, 10)).length;
      // Increment scoreTotal by the number of replacements made
      scoreTotal += replacementValues.length * occurrences;
  
      // Replace all occurrences of key in initialList with replacementValues
      initialList = initialList.map(value => (value === parseInt(key, 10) ? replacementValues : value)).flat();
    }
    console.log(scoreTotal)
  }
  debugger
  console.log("everything is a 201, card 201 doesn't exist so we're exiting")
  console.log(scoreTotal)
    return "Part 2: " + scoreTotal
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;

  }
  
}
