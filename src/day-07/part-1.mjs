import { time } from 'console';
import { readFile } from 'fs/promises';
export async function processPart1() {
  const elfFile = '/Users/usuario/AdventOfCode2023/AdventOfCode2023/src/day-07/input.txt';
  const dataFile = await readFile(elfFile, 'utf8');
//  Get input
var fiveArray = []
var fourArray = []
var threeArray = []
var fullHouseArray = []
var twoPairArray = []
var onePairArray = []
var highCardArray = []
var sortedArray = []
  const lines = dataFile.split ("\n");
  let totalValue = 0
  try {
  //split input by line as hand, bid
  for(let i = 0; i < lines.length;i++){
    var hand = lines[i].split(" ")[0]
    var cardString = hand.split("")
  //split hand by character
//for each hand, find how many times each card appears in the hand
if ( cardString.filter(x => x===cardString[0]).length == 5){
//	if the first card is found 5 times it's 1 unique = 5OAK, add to the 5OAK array
  fiveArray.push(lines[i])
//checking if the second or the fourth card have four instances, making it a 4oAK, add to the 4OAK array
} else if ( cardString.filter(x => x===cardString[1]).length == 4 || cardString.filter(x => x===cardString[3]).length == 4){
fourArray.push(lines[i])
//		check 3 numbers, if any of them are 3 of a kind, secondary check
}else if ( cardString.filter(x => x===cardString[0]).length == 3 ||
           cardString.filter(x => x===cardString[1]).length == 3|| 
          cardString.filter(x => x===cardString[2]).length == 3){
  //check four numbers, if any of those are 2 of a kind, it's a full house
          if ( cardString.filter(x => x===cardString[0]).length == 1 ||
          cardString.filter(x => x===cardString[1]).length == 1 || 
          cardString.filter(x => x===cardString[2]).length == 1 ||
          cardString.filter(x => x===cardString[3]).length == 1) {
          threeArray.push(lines[i])
          //otherwise it's a 3 of a kind
       } else {fullHouseArray.push(lines[i])}}
       //if the sum of card counts = 9 (that is, 1+2+2+2+2 in any order), it's a 2 pair
       else if (cardString.filter(x => x===cardString[0]).length +
                cardString.filter(x => x===cardString[1]).length + 
                cardString.filter(x => x===cardString[2]).length +
                cardString.filter(x => x===cardString[3]).length +
                cardString.filter(x => x===cardString[4]).length == 9) {
        twoPairArray.push(lines[i])
       }
       //if the sum of card counts = 7 (that is, 1+1+1+2+2 in any order), it's a 1 pair
       else if (cardString.filter(x => x===cardString[0]).length +
       cardString.filter(x => x===cardString[1]).length + 
       cardString.filter(x => x===cardString[2]).length +
       cardString.filter(x => x===cardString[3]).length +
       cardString.filter(x => x===cardString[4]).length == 7) {
        onePairArray.push(lines[i])
       }
       //this could have been an else but checking for something dumb like an empty hand which could mess things up
       else if ( cardString.filter(x => x===cardString[0]).length == 1 &&
        cardString.filter(x => x===cardString[1]).length == 1 && 
        cardString.filter(x => x===cardString[2]).length == 1 &&
        cardString.filter(x => x===cardString[3]).length == 1) {
        highCardArray.push(lines[i])
       }
       // in hindsight, I probably could have used the count trick I used for 2oak and 1oak for all of it, for(i in cardString.length, sum cardString.Filter...)
       //25 = 5oak, 17 = 4oak, 13 = full house, 11 = 3oak, 9 = 2pair 7 = 1pair, 5 = highcard ... maybe next time.
       const fiveCardsReplaced = fiveArray.map(card => {
        // Add leading 0 to numerics
        const withLeadingZero = card.replace(/\d/g, match => match.padStart(2, '0'));

        // Replace non-numerics with corresponding numbers
        const replaced = withLeadingZero.replace(/[TJQKA]/g, match => {
          const values = { T: '10', J: '11', Q: '12', K: '13', A: '14' };
          return values[match];
        });
      
        return replaced;
      })
      var fiveCardsSorted = fiveCardsReplaced.sort((a, b) => b.localeCompare(a))
//************ FIVE OAK SORTED ABOVE ***********
          const fourCardsReplaced = fourArray.map(card => {
        // Add leading 0 to numerics
        const withLeadingZero = card.replace(/\d/g, match => match.padStart(2, '0'));
      
        // Replace non-numerics with corresponding numbers
        const replaced = withLeadingZero.replace(/[TJQKA]/g, match => {
          const values = { T: '10', J: '11', Q: '12', K: '13', A: '14' };
          return values[match];
        });
      
        return replaced;
      })
      var fourCardsSorted = fourCardsReplaced.sort((a, b) => b.localeCompare(a))
//************ FOUR OAK SORTED ABOVE ***********
          const threeCardsReplaced = threeArray.map(card => {
        // Add leading 0 to numerics
        const withLeadingZero = card.replace(/\d/g, match => match.padStart(2, '0'));
      
        // Replace non-numerics with corresponding numbers
        const replaced = withLeadingZero.replace(/[TJQKA]/g, match => {
          const values = { T: '10', J: '11', Q: '12', K: '13', A: '14' };
          return values[match];
        });
      
        return replaced;
      })
      var threeCardsSorted = threeCardsReplaced.sort((a, b) => b.localeCompare(a))
//************ THREE OAK SORTED ABOVE ***********
            const fullHouseCardsReplaced = fullHouseArray.map(card => {
        // Add leading 0 to numerics
        const withLeadingZero = card.replace(/\d/g, match => match.padStart(2, '0'));
      
        // Replace non-numerics with corresponding numbers
        const replaced = withLeadingZero.replace(/[TJQKA]/g, match => {
          const values = { T: '10', J: '11', Q: '12', K: '13', A: '14' };
          return values[match];
        });
      
        return replaced;
      })
      var fullHouseCardsSorted = fullHouseCardsReplaced.sort((a, b) => b.localeCompare(a))
    //************ FULL HOUSE SORTED ABOVE ***********
        const twoPairReplaced = twoPairArray.map(card => {
        // Add leading 0 to numerics
        const withLeadingZero = card.replace(/\d/g, match => match.padStart(2, '0'));
      
        // Replace non-numerics with corresponding numbers
        const replaced = withLeadingZero.replace(/[TJQKA]/g, match => {
          const values = { T: '10', J: '11', Q: '12', K: '13', A: '14' };
          return values[match];
        });
      
        return replaced;
      })
      var twoPairCardsSorted = twoPairReplaced.sort((a, b) => b.localeCompare(a))
//************ TWO PAIR SORTED ABOVE ***********
        const onePairReplaced = onePairArray.map(card => {
        // Add leading 0 to numerics
        const withLeadingZero = card.replace(/\d/g, match => match.padStart(2, '0'));
      
        // Replace non-numerics with corresponding numbers
        const replaced = withLeadingZero.replace(/[TJQKA]/g, match => {
          const values = { T: '10', J: '11', Q: '12', K: '13', A: '14' };
          return values[match];
        });
      
        return replaced;
      })
      var onePairCardsSorted = onePairReplaced.sort((a, b) => b.localeCompare(a))
//************ ONE PAIR SORTED ABOVE ***********
          const highCardsReplaced = highCardArray.map(card => {
        // Add leading 0 to numerics
        const withLeadingZero = card.replace(/\d/g, match => match.padStart(2, '0'));
      
        // Replace non-numerics with corresponding numbers
        const replaced = withLeadingZero.replace(/[TJQKA]/g, match => {
          const values = { T: '10', J: '11', Q: '12', K: '13', A: '14' };
          return values[match];
        });
      
        return replaced;
      })
      var highCardsSorted = highCardsReplaced.sort((a, b) => b.localeCompare(a))
      var fullTableSorted = fiveCardsSorted.concat(fourCardsSorted,fullHouseCardsSorted,threeCardsSorted,twoPairCardsSorted,onePairCardsSorted,highCardsSorted)
//************ HIGH CARD SORTED ABOVE ***********
    }
    for (let i = 0; i < fullTableSorted.length; i++){
    const reversedValues = { '10': 'T', '11': 'J', '12': 'Q', '13': 'K', '14': 'A','09': '9','08': '8','07': '7','06': '6','05': '5','04': '4','03': '3','02': '2','01': '1','00': '0' };

      const fullTableCards = fullTableSorted[i].replace(/\d{2}/g, match => reversedValues[match]);
      sortedArray.push(fullTableCards)
    }

    for (let i = 0; i<sortedArray.length;i++){
    totalValue += sortedArray[i].split(" ")[1] * (sortedArray.length - i)
 }

return "Part 1: " + totalValue


  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    throw err;
  }
}