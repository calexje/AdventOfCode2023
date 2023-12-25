import { time } from 'console';
import { readFile } from 'fs/promises';
export async function processPart2() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-05/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const dataFileNoHeading = dataFile.replace(/[a-zA-Z-]+.*/g, '').trim()
// data handling variables
let start;
let addition;
let destinationStart;
let end;
let destinationTarget;
let currentSeed;
let matchFound=false
//map arrays
const maps = dataFileNoHeading.split(/\n\s*\n/)
let seeds=maps[0].split(" ");
let seedToSoil=maps[1].split("\n");
let soilToFertiliser=maps[2].split("\n");
let fertiliserToWater=maps[3].split("\n");
let waterToLight=maps[4].split("\n");
let lightToTemperature=maps[5].split("\n");
let temperatureToHumidity=maps[6].split("\n");
let humidityToLocation=maps[7].split("\n");
let locationStart=[]
let locationLength=[]
let locationStop=[]
let locationMinimum = 4846951716;
let seedsChecked = 0;
let seedMinimum = 77896732
let seedMaximum = 3793434698
let seedPercentage = (seedsChecked / (seedMaximum - seedMinimum)) * 100;
console.log("part 2 started")
/*for (let a = 0; a < seeds.length; a++){
  if(a % 2===0){
    locationStart.push(seeds[a])
  } else {
    locationLength.push(seeds[a])
  }
}
for (let b=0;b<locationStart.length;b++){
  let locationCalc = parseInt(locationStart[b])+parseInt(locationLength[b])
  locationStop.push(locationCalc)
}
*/
//for each item in the list of range starts
//check each number between the range start and the range stop. Pairs are located by index.
for(let seedIndex = seedMinimum;seedIndex<=seedMaximum;seedIndex++){
  if (
    (seedIndex >= 77896732 && seedIndex <= 256171946) ||
    (seedIndex >= 280775197 && seedIndex <= 288310494) ||
    (seedIndex >= 412141395 && seedIndex <= 558493009) ||
    (seedIndex >= 613340959 && seedIndex <= 965891672) ||
    (seedIndex >= 1075412586 && seedIndex <= 1316443296) ||
    (seedIndex >= 1532286286 && seedIndex <= 2647342078) ||
    (seedIndex >= 2748861189 && seedIndex <= 3173274996) ||
    (seedIndex >= 3229061264 && seedIndex <= 3256336473) ||
    (seedIndex >= 3430371306 && seedIndex <= 3568978020) ||
    (seedIndex >= 3663093536 && seedIndex <= 3793434698)
  ) {
  //seed to soil starts
  //seed to soil starts
  for (let i = 0;i<seedToSoil.length;i++){
    if(!matchFound){
  currentSeed = seedIndex
  start = seedToSoil[i].split(" ")[1]
  addition = seedToSoil[i].split(" ")[2]
  destinationStart = seedToSoil[i].split(" ")[0]
  end = (Number(start)+Number(addition))
  destinationTarget = (Number(currentSeed)-Number(start))
  if(Number(currentSeed) >=Number(start) && Number(currentSeed) <Number(end)){
    matchFound=true
    destinationTarget = (Number(currentSeed)-Number(start)+Number(destinationStart))
  } else{
    destinationTarget = currentSeed
  }}
}
matchFound=false
//seed to soil ends
//seed to soil ends
//soil to fertilizer starts
//soil to fertilizer starts
for (let i = 0;i<soilToFertiliser.length;i++){
  if(!matchFound){
  currentSeed = destinationTarget
  start = soilToFertiliser[i].split(" ")[1]
  addition = soilToFertiliser[i].split(" ")[2]
  destinationStart = soilToFertiliser[i].split(" ")[0]
  end = (Number(start)+Number(addition))
  destinationTarget = (Number(currentSeed)-Number(start))
  if(Number(currentSeed) >=Number(start) && Number(currentSeed) <Number(end)){
    matchFound=true
    destinationTarget = (Number(currentSeed)-Number(start)+Number(destinationStart))
  } else{
    destinationTarget = currentSeed
  }}
}
matchFound=false
//soil to fertilizer ends
//soil to fertilizer ends
//fertilizer to water starts
//fertilizer to water starts
for (let i = 0;i<fertiliserToWater.length;i++){
  if(!matchFound){
  currentSeed = destinationTarget
  start = fertiliserToWater[i].split(" ")[1]
  addition = fertiliserToWater[i].split(" ")[2]
  destinationStart = fertiliserToWater[i].split(" ")[0]
  end = (Number(start)+Number(addition))
  destinationTarget = (Number(currentSeed)-Number(start))
  if(Number(currentSeed) >=Number(start) && Number(currentSeed) <Number(end)){
    matchFound=true
    destinationTarget = (Number(currentSeed)-Number(start)+Number(destinationStart))
  } else{
    destinationTarget = currentSeed
  }}
}
matchFound=false
//<<<<<<<<<<<<<<<<<<<<<<<<
//fertilizer to water ends
//fertilizer to water ends
//water to light starts
//water to light starts
for (let i = 0;i<waterToLight.length;i++){
  if(!matchFound){
  currentSeed = destinationTarget
  start = waterToLight[i].split(" ")[1]
  addition = waterToLight[i].split(" ")[2]
  destinationStart = waterToLight[i].split(" ")[0]
  end = (Number(start)+Number(addition))
  destinationTarget = (Number(currentSeed)-Number(start))
  if(Number(currentSeed) >=Number(start) && Number(currentSeed) <Number(end)){
    matchFound=true
    destinationTarget = (Number(currentSeed)-Number(start)+Number(destinationStart))
  } else{
    destinationTarget = currentSeed
  }}
}
matchFound=false
//<<<<<<<<<<<<<<<<<<<<<<<<
//water to light ends
//water to light ends
//light to temperature starts
//light to temperature starts
for (let i = 0;i<lightToTemperature.length;i++){
  if(!matchFound){
  currentSeed = destinationTarget
  start = lightToTemperature[i].split(" ")[1]
  addition = lightToTemperature[i].split(" ")[2]
  destinationStart = lightToTemperature[i].split(" ")[0]
  end = (Number(start)+Number(addition))
  destinationTarget = (Number(currentSeed)-Number(start))
  if(Number(currentSeed) >=Number(start) && Number(currentSeed) <Number(end)){
    matchFound=true
    destinationTarget = (Number(currentSeed)-Number(start)+Number(destinationStart))
  } else{
    destinationTarget = currentSeed
  }}
}
matchFound=false
//<<<<<<<<<<<<<<<<<<<<<<<<
//light to temperature ends
//light to temperature ends
//temperature to humidity starts
//temperature to humidity starts
for (let i = 0;i<temperatureToHumidity.length;i++){
  if(!matchFound){
  currentSeed = destinationTarget
  start = temperatureToHumidity[i].split(" ")[1]
  addition = temperatureToHumidity[i].split(" ")[2]
  destinationStart = temperatureToHumidity[i].split(" ")[0]
  end = (Number(start)+Number(addition))
  destinationTarget = (Number(currentSeed)-Number(start))
  if(Number(currentSeed) >=Number(start) && Number(currentSeed) <Number(end)){
    matchFound=true
    destinationTarget = (Number(currentSeed)-Number(start)+Number(destinationStart))
  } else{
    destinationTarget = currentSeed
  }}
}
matchFound=false
//<<<<<<<<<<<<<<<<<<<<<<<<
//temperature to humidity ends
//temperature to humidity ends
//humidity to location starts
//humidity to location starts
for (let i = 0;i<humidityToLocation.length;i++){
  if(!matchFound){
  currentSeed = destinationTarget
  start = humidityToLocation[i].split(" ")[1]
  addition = humidityToLocation[i].split(" ")[2]
  destinationStart = humidityToLocation[i].split(" ")[0]
  end = (Number(start)+Number(addition))
  destinationTarget = (Number(currentSeed)-Number(start))
  if(Number(currentSeed) >=Number(start) && Number(currentSeed) <Number(end)){
    matchFound=true
    destinationTarget = (Number(currentSeed)-Number(start)+Number(destinationStart))
  } else{
    destinationTarget = currentSeed
  }}
}
if(locationMinimum > destinationTarget){
  locationMinimum = destinationTarget
}
seedsChecked++
matchFound=false
if(seedsChecked % 1000000 == 0){
console.log(seedsChecked.toLocaleString('en-US') + " Seeds Checked. Minimum in list was "+ locationMinimum+". "+ seedsChecked / (seedMaximum - seedMinimum)+"% complete")

}
  }
}
 console.log("out of the loop")
 
  try {

    console.log("ended, lowest is "+locationMinimum)


    return "Part 2: " + locationMinimum
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
