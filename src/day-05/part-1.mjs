import { time } from 'console';
import { readFile } from 'fs/promises';
export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-05/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const dataFileNoHeading = dataFile.replace(/[a-zA-Z-]+.*/g, '').trim()

//data handling variables 
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
let locationArray=[]

//loop through each seed
for(let seedIndex = 0;seedIndex<seeds.length;seedIndex++){
  
  //seed to soil starts
  //seed to soil starts
  for (let i = 0;i<seedToSoil.length;i++){
    if(!matchFound){
      
  currentSeed = seeds[seedIndex]
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

locationArray.push(destinationTarget)


matchFound=false
  }
 
 
 let locationMinimum = Math.min(...locationArray)
 
 
  try {

    console.log("Part 1 ended, lowest is "+locationMinimum)


    return "Part 1: " + locationMinimum
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
