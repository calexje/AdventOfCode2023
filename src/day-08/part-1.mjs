import { debug, time } from 'console';
import { stat } from 'fs';
import { readFile } from 'fs/promises';
export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-08/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const lines = dataFile.split ("\n");
  var currentStation = "AAA"
  let currentStationIndex = 0
  let arrived = false
  let stations = []
  let lefts = []
  let rights = []
  var stationsVisited=0
  const directions = lines[0].split("");
  for (let i = 2;i < lines.length;i++){
const station = lines[i].replace("=",",").split(",")[0].trim()
stations.push(station)
const left = lines[i].replace("=",",").split(",")[1].replace("(","").trim()
lefts.push(left)
const right = lines[i].replace("=",",").split(",")[2].replace(")","").trim()
rights.push(right)
}

try {
      do {
      for (let i = 0;i<=directions.length;i++){
          if(currentStation!="ZZZ"){
          currentStationIndex = stations.indexOf(currentStation)
          if(directions[i] === "R"){
            currentStation = rights[currentStationIndex]
        }else{
          currentStation = lefts[currentStationIndex]
        }stationsVisited++
        if(i == directions.length){
          i=0}
      }
        arrived = true
      }} while (!arrived)
      console.log("I'm free!")
      stationsVisited++
      

  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}