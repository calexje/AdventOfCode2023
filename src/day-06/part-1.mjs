import { time } from 'console';
import { readFile } from 'fs/promises';
export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-06/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
  const lines = dataFile.split ("\n");
  const timeAllowed = lines[0].split(/\s+/);
  const distanceRecord = lines[1].split(/\s+/);
  

  try {
    //for each race
    var waysFound = 0
    var answer = 1
    for (let racesRun = 1; racesRun < timeAllowed.length; racesRun++) {
      // for each time combination within that race
      for (let secondsPassed = 0; secondsPassed <= timeAllowed[racesRun]; secondsPassed++) {
        var timeCharging = secondsPassed
        var timeMoving = timeAllowed[racesRun] - timeCharging
        var distanceMoved = timeMoving*timeCharging
        if(distanceMoved > distanceRecord[racesRun]) {
          waysFound++
        }
      }
      answer = answer * waysFound
      waysFound=0
    }
    //for each second you hold the button you get a millimeter per second in speed.
    //1 second hold = 1 mm per second
    //2 second hold = 2 mm per second
    // distance_record
    // time_allowed
    //timeCharging = value between 0 and time_allowed
    //timeMoving = time_allowed - timeCharging
    //distance = timeMoving*timeCharging
    //where distance > distance_record, increment "waysFound"
    // answer is timeMoving * timeCharging * waysFound



    return "Part 1: "+answer
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}
