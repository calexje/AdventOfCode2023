import { debug, time } from 'console';
import { stat } from 'fs';
import { readFile } from 'fs/promises';
import { start } from 'repl';
export async function processPart2() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-08/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const lines = dataFile.split ("\n");
  let currentStation1 = "VBA"
  let currentStation2 = "TVA"
  let currentStation3 = "DVA"
  let currentStation4 = "VPA"
  let currentStation5 = "AAA"
  let currentStation6 = "DTA"
  let currentStationIndex1 = 0
  let currentStationIndex2 = 0
  let currentStationIndex3 = 0
  let currentStationIndex4 = 0
  let currentStationIndex5 = 0
  let currentStationIndex6 = 0
  let arrived = false
  let stations = []
  let lefts = []
  let rights = []
  let station=""
  let left = ""
  let right = ""
  for (let i = 2;i < lines.length;i++){
    station = lines[i].replace("=",",").split(",")[0].trim()
    stations.push(station)
    left = lines[i].replace("=",",").split(",")[1].replace("(","").trim()
    lefts.push(left)
    right = lines[i].replace("=",",").split(",")[2].replace(")","").trim()
    rights.push(right)}
  let stationsVisited=0
  const directions = lines[0].split("");

try {

      do {
      for (let i = 0;i<=directions.length;i++){
        if(stationsVisited%5000000000000==0){
          console.log(stationsVisited)
          debugger
        }
          if(
          currentStation1.endsWith("Z")==false ||
          currentStation2.endsWith("Z")==false || 
          currentStation3.endsWith("Z")==false ||
          currentStation4.endsWith("Z")==false ||
          currentStation5.endsWith("Z")==false ||
          currentStation6.endsWith("Z")==false){
          currentStationIndex1 = stations.indexOf(currentStation1)
          currentStationIndex2 = stations.indexOf(currentStation2)
          currentStationIndex3 = stations.indexOf(currentStation3)
          currentStationIndex4 = stations.indexOf(currentStation4)
          currentStationIndex5 = stations.indexOf(currentStation5)
          currentStationIndex6 = stations.indexOf(currentStation6)
          if(directions[i] === "R"){
            currentStation1 = rights[currentStationIndex1]
            currentStation2 = rights[currentStationIndex2]
            currentStation3 = rights[currentStationIndex3]
            currentStation4 = rights[currentStationIndex4]
            currentStation5 = rights[currentStationIndex5]
            currentStation6 = rights[currentStationIndex6]

        }else{
          currentStation1 = lefts[currentStationIndex1]
          currentStation2 = lefts[currentStationIndex2]
          currentStation3 = lefts[currentStationIndex3]
          currentStation4 = lefts[currentStationIndex4]
          currentStation5 = lefts[currentStationIndex5]
          currentStation6 = lefts[currentStationIndex6]
          
        }stationsVisited++
        if(i == directions.length){
          i=0}
         }
        arrived = true
      }} while (!arrived)
      debugger
      console.log("I'm free!")
      console.log(stationsVisited)

  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}