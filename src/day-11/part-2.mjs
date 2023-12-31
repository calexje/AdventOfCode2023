import { debug, time } from 'console';
import { stat } from 'fs';
import { readFile } from 'fs/promises';
export async function processPart2() {
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
  let transitX
  let transitY

try {
//set the grid array up
  for (let y = 0; y<rows.length;y++){
    for (let x = 0;x<rows[y].length;x++){
      cellValue = rows[y].split("")
      if (cellValue[x] == "#"){
        rowsWithGalaxy.push(y)
        columnsWithGalaxy.push(x)
        let currentCell = [y,x]
        console.log("found " + currentCell)
        coordsArray.push(currentCell)
        galaxyCounter++
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

//successfully expanded horizontally
console.log("============ Step 4: ?? fucking wormholes or some shit?========")
//loop through each set of galaxy coordinates and run the routes between.
do{
    let currentGalaxy = coordsArray.shift() 
    currentGalaxyX = currentGalaxy[1]
    currentGalaxyY = currentGalaxy[0]
    for (let galaxyID = 0;galaxyID<coordsArray.length;galaxyID++){
      transitX = currentGalaxyX
      transitY = currentGalaxyY
      let targetGalaxy = coordsArray[galaxyID]
      targetGalaxyX = targetGalaxy[1]
      targetGalaxyY = targetGalaxy[0] 
      console.log("calculating paths from galaxy " + currentGalaxy + " at " + galaxyID + " / " + coordsArray.length)
      do{

        if (transitX < targetGalaxyX){
          transitX++
        } else if (transitX > targetGalaxyX) {
          transitX--
        } else if (transitY < targetGalaxyY){
          transitY++
        } else if (transitY > targetGalaxyY){
          transitY--
        }
        if (columnsToExpand.includes(transitX) ){
          totalDistance+=1000000
        } else if (rowsToExpand.includes(transitY)){
          totalDistance+=1000000
        }
          else {totalDistance++}
        totalDistance
      }
      while(transitX != targetGalaxyX || transitY != targetGalaxyY)
    }
  }
  while(coordsArray.length > 1)
  console.log("============ Step 5: return value========")
  // coords array is empty, there are no more galaxies to check. Push total distance and exit.
  console.log("The loop is done, " + totalDistance + " is the total distance")
return totalDistance

  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}