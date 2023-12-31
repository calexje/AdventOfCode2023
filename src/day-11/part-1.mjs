import { debug, time } from 'console';
import { stat } from 'fs';
import { readFile } from 'fs/promises';
export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-11/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const rows = dataFile.split ("\n");
  let coordsArray = []
  let galaxyCounter = 0
  let cellValue
  let rowSeparated =[]
  let grid =[]
  let currentGalaxyX
  let currentGalaxyY
  let targetGalaxyX
  let targetGalaxyY
  let totalDistance=0
  let routesCalculated =0
  let rowsWithGalaxy=[]
  let columnsWithGalaxy=[]
  let rowsToExpand =[]
  let columnsToExpand =[]

try {
//set the grid array up
/*
  for (let y = 0; y<rows.length;y++){
    for (let x = 0;x<rows[y].length;x++){
      cellValue = rows[y].split("")
      if (cellValue[x] == "#"){
        rowsWithGalaxy.push(y)
        columnsWithGalaxy.push(x)
      }
      rowSeparated.push(cellValue[x])
    }
    grid.push(rowSeparated)
    rowSeparated=[]
  }
  console.log("======= Stage 1: Identifying Galaxies ==========")
// check where we need to expand the universe
for (let y = 0; y<grid.length;y++){
  if (!rowsWithGalaxy.includes(y)){ 
        rowsToExpand.push(y)
  }
}
for (let x = 0;x<grid[0].length;x++){
    if (!columnsWithGalaxy.includes(x)){ 
        columnsToExpand.push(x)
    }
}
console.log(" Insert columns at" + columnsToExpand)
console.log(" Insert rows at" + rowsToExpand)
console.log("================Step 2: expanding galaxy.========")
//expand the universe
for (let y = grid.length-1; y>=0;y--){
  if (rowsToExpand.includes(y)){
    //console.log("adding " + blankRow + " at " + y)
        grid.splice(y,0,[".",".",".",".",".",".",".",".",".","."])
    } 
}
// successfully expanded vertically
for (let x = grid[grid.length-1].length; x>=0;x--){
  if (columnsToExpand.includes(x)){
    for (let y = grid.length-1; y>=0;y--){
        grid[y].splice(x+1,0,".")
    }
  } 
}
//successfully expanded horizontally
console.log("============ Step 3: identifying new galaxy coordinates========")
  for (let y = 0; y<grid.length;y++){
    for (let x = 0;x<grid[0].length;x++){
      if (grid[y][x] == "#"){
        let currentCell = [y,x]
        console.log("found " + currentCell)
        coordsArray.push(currentCell)
        galaxyCounter++
      }
    }
  }
console.log("============ Step 4: finding distance between galaxies.========")
//loop through each set of galaxy coordinates and run the routes between.

do{
    let currentGalaxy = coordsArray.shift() 
    currentGalaxyX = currentGalaxy[1]
    currentGalaxyY = currentGalaxy[0]
    for (let galaxyID = 0;galaxyID<coordsArray.length;galaxyID++){
      let targetGalaxy = coordsArray[galaxyID]
      targetGalaxyX = targetGalaxy[1]
      targetGalaxyY = targetGalaxy[0] 
      console.log("calculating path from galaxy " + currentGalaxy + " to " + targetGalaxy)
      let xDistance = currentGalaxyX-targetGalaxyX
      let yDistance = currentGalaxyY-targetGalaxyY
      if(xDistance<0){xDistance = xDistance*-1}
      if(yDistance<0){yDistance = yDistance*-1}
      let fulldistance = xDistance + yDistance
      console.log("Current Galaxy is " + currentGalaxy+". Target galaxy is "+ targetGalaxy)
      console.log(xDistance + " is the x distance, " + yDistance + " is the y. The full distance is " + fulldistance)
      totalDistance+= fulldistance
      routesCalculated++
      console.log("Calculated "+ routesCalculated + " routes")
      console.log(totalDistance + " is the current total distance")
    }
    console.log(coordsArray.length +" galaxies left to calculate")
  }
  while(coordsArray.length > 1)
  console.log("============ Step 5: return value========")
  // coords array is empty, there are no more galaxies to check. Push total distance and exit.
  console.log("The loop is done, " + totalDistance + " is the total distance")
return totalDistance
*/
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
  
}