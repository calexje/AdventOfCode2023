import { debug, time } from 'console';
import { stat } from 'fs';
import { readFile } from 'fs/promises';
import { start } from 'repl';
export async function processPart2() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-08/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const lines = dataFile.split ("\n");
  let currentStation = ""
  let startStation = []
  let stationRatios=[]
  let stationMultiplier = 1
  let currentStationIndex = 0
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
  
  for (let i = 0;i<stations.length; i++){
    currentStation = stations[i]
  if (currentStation.endsWith("A")==true){
    startStation.push(currentStation)
  }
}console.log("Found all the stations, the list is " + startStation)

      do {
        for (let j = 0; j<startStation.length;j++){
          currentStation = startStation[j]
           for (let k = 0;k<=directions.length;k++){
            if(
              currentStation.endsWith("Z")==false){
                currentStationIndex = stations.indexOf(currentStation)
                if(directions[k] === "R"){
                  currentStation = rights[currentStationIndex]
                  }else{
                  currentStation = lefts[currentStationIndex]
                  }stationsVisited++
                if(k == directions.length){
                  k=0}
              }
      }
      console.log("solved " + startStation[j] + " in " + stationsVisited +" steps ("+stationsVisited/directions.length+" revolutions). Moving to " + startStation[j+1])
      stationRatios.push(stationsVisited/directions.length)
      stationMultiplier= (stationsVisited/directions.length)*stationMultiplier
      console.log(stationRatios)
      console.log(j+1+ " of " + startStation.length + " stations complete. The current Lowest Common Multiple is now " + stationMultiplier)
      stationsVisited = 0
      currentStation = startStation[j]
    }
    arrived = true
    }while (!arrived)
    console.log("Task complete, time to break out")
    console.log("I'm free!")
       console.log(stationMultiplier + " is the maximum revolutions needed, that's " + stationMultiplier*directions.length + " steps")
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}