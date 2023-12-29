import { debug, time } from 'console';
import { stat } from 'fs';
import { readFile } from 'fs/promises';
import { start } from 'repl';
export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-10/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const rows = dataFile.split ("\n");
  let rowSeparated =[]
  let grid=[]
  let startingX
  let startingY
  let cellValue
  let facing = "east"
  let currentX
  let currentY
  let arrived = false
  let stepsTaken = 1
  
for (let y = 0; y<rows.length;y++){
  for (let x = 0;x<rows[y].length;x++){
    cellValue = rows[y].split("")
    if (cellValue[x] == "S"){
      startingX = x
      startingY = y
    }
    rowSeparated.push(cellValue[x])
  }
  grid.push(rowSeparated)
  rowSeparated=[]
}
currentX = startingX
currentY = startingY
do{
  if(facing=="east"){
    if(grid[currentY][currentX +1] == "J"){
      facing = "north"
      currentX++
    } else if (grid[currentY][currentX+1] == "7"){
      facing = "south"
      currentX++
    } else if(grid[currentY][currentX+1] == "-"){
      facing = "east"
      currentX++
    }
  } else if(facing=="south"){
    
    if(grid[currentY+1][currentX] == "J"){
      facing = "west"
      currentY++
    } else if(grid[currentY+1][currentX] == "L"){
      facing = "east"
      currentY++
    } else if(grid[currentY+1][currentX] == "|"){
      facing = "south"
      currentY++
    }
  } else if(facing=="west"){
    if(grid[currentY][currentX-1] == "L"){
      facing = "north"
      currentX--
    } else if(grid[currentY][currentX-1] == "F"){
      facing = "south"
      currentX--
    } else if(grid[currentY][currentX-1] == "-"){
      facing = "west"
      currentX--
    }
  } else if(facing=="north"){
    if(grid[currentY-1][currentX] == "F"){
      facing = "east"
      currentY--
    } else if(grid[currentY-1][currentX] == "7"){
      facing = "west"
      currentY--
    } else if(grid[currentY-1][currentX] == "|"){
      facing = "north"
      currentY--
    }
  }
  if(facing=="north" && grid[currentY-1][currentX] == "S"||
    facing=="east" && grid[currentY][currentX+1] == "S"||
    facing=="south" && grid[currentY+1][currentX] == "S"||
    facing=="west" && grid[currentY][currentX-1] == "S"){
    arrived=true	
    }  
    stepsTaken++
}
  while (!arrived)  
return(stepsTaken/2)
try {
console.log("Day 10.1")
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}