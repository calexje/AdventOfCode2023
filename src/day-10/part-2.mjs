import { debug, time } from 'console';
import { stat } from 'fs';
import { readFile } from 'fs/promises';
import { connect } from 'http2';
import { start } from 'repl';
export async function processPart2() {
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
  let tracking = false
  let initialised = false
  let insideCount=0
  let cornerStarted
  
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
      grid[currentY][currentX]="╝"
    } else if (grid[currentY][currentX+1] == "7"){
      facing = "south"
      currentX++
      grid[currentY][currentX]="╗"
    } else if(grid[currentY][currentX+1] == "-"){
      facing = "east"
      currentX++
      grid[currentY][currentX]="="
    }
  } else if(facing=="south"){
    if(grid[currentY+1][currentX] == "J"){
      facing = "west"
      currentY++
      grid[currentY][currentX]="╝"
    } else if(grid[currentY+1][currentX] == "L"){
      facing = "east"
      currentY++
      grid[currentY][currentX]="╚"
    } else if(grid[currentY+1][currentX] == "|"){
      facing = "south"
      currentY++
      grid[currentY][currentX]="║"
    }
  } else if(facing=="west"){
    if(grid[currentY][currentX-1] == "L"){
      facing = "north"
      currentX--
      grid[currentY][currentX]="╚"
    } else if(grid[currentY][currentX-1] == "F"){
      facing = "south"
      currentX--
      grid[currentY][currentX]="╔"
    } else if(grid[currentY][currentX-1] == "-"){
      facing = "west"
      currentX--
      grid[currentY][currentX]="="
    }
  } else if(facing=="north"){
    if(grid[currentY-1][currentX] == "F"){
      facing = "east"
      currentY--
      grid[currentY][currentX]="╔"
    } else if(grid[currentY-1][currentX] == "7"){
      facing = "west"
      currentY--
      grid[currentY][currentX]="╗"
    } else if(grid[currentY-1][currentX] == "|"){
      facing = "north"
      currentY--
      grid[currentY][currentX]="║"
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
 // now we do ray casting
 for (let y = 0; y<grid[y].length-1;y++){
  for (let x = 0;x<grid[y].length;x++){
    //console.log(grid[y][x] + " tracking " + tracking + " initialised " + initialised)
    if(grid[y][x].match(/╔|╚|╝|╗/g)&&tracking== false && initialised == false){
      // corner found, outside of shape, haven't hit a previous corner piece
      initialised = true
      cornerStarted = grid[y][x]
      //console.log(grid[y][x] + " at " + y + x + " Tracking is false, Initialised is false. We're outside the shape, and have hit a possible entry. Initialising and setting corner")
      } else if(grid[y][x].match(/╔|╚|╝|╗/g)&&tracking== true && initialised == false){
        //corner found, inside of shape, haven't hit a previous corner piece
        initialised = true
        cornerStarted = grid[y][x]
        //console.log(grid[y][x] + " at " + y + x + " . We're inside the shape, we're just hit a possible exit point. Initialised set to true")
      } else if(grid[y][x].match(/╔|╚|╝|╗/g)&&tracking== true && initialised == true){
        //corner found, inside of shape, already hit an exit corner piece
        if ((grid[y][x] == "╗" && cornerStarted == "╔")||(grid[y][x] == "╝" && cornerStarted == "╚")) {
        // u bend, nothing happens
        //console.log(grid[y][x] + " at " + y + x + " . false alarm, U bend. Initialised set to false")
        initialised = false
        } else if ((grid[y][x] == "╝" && cornerStarted == "╔")||(grid[y][x] == "╗" && cornerStarted == "╚")){
          //console.log(grid[y][x] + " at " + y + x + " . Exit of shape confirmed, tracking is false and initialised is false.")
          tracking = false
          initialised = false
          //shape successfully exited
        }
      }else if(grid[y][x].match(/╔|╚|╝|╗/g)&&tracking== false && initialised == true){
        //corner found, outside of shape, have already hit a corner piece
        if ((grid[y][x] == "╗" && cornerStarted == "╔")||(grid[y][x] == "╝" && cornerStarted == "╚")) {
          // u bend, nothing happens
          //console.log(grid[y][x] + " at " + y + x + " . false alarm, U bend. Initialised set to false")
          initialised = false
          } else if ((grid[y][x] == "╝" && cornerStarted == "╔")||(grid[y][x] == "╗" && cornerStarted == "╚")){
            //console.log(grid[y][x] + " at " + y + x + " . Entry of shape confirmed, tracking is true and initialised is false.")
            tracking = true
            initialised = false
            //shape exited
          }
      } else if(grid[y][x]=="║"&&tracking== false){
        tracking = true
        //console.log("Vert hit, outside shape, jumping in")
        //not in shape, jumping into shape
      } else if(grid[y][x]=="║"&&tracking== true){
        //not in shape, jumping out of shape
        tracking = false
        //console.log("Vert hit, inside shape, jumping out")
      }
      if ((tracking==true && grid[y][x].includes("J"))||
      (tracking==true && grid[y][x].includes("F"))||
      (tracking==true && grid[y][x].includes("-"))||
      (tracking==true && grid[y][x].includes("L"))||
      (tracking==true && grid[y][x].includes("7"))||
      (tracking==true && grid[y][x].includes("|"))||
      (tracking==true && grid[y][x].includes(".")))
    {
      grid[y][x] = "*"
 insideCount++   
    }
    }
    console.log(JSON.stringify(grid[y]))
    //console.log(" line "  +y)
  //debugger
      
  }
    console.log("Exit")

  console.log(insideCount + " cells inside")
  return insideCount

try {
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}