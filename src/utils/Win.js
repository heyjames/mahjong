import {
  createUniqueCounterTable,
  pushSpecifiedCountsToArray,
  getSubstring,
  isEmptyObject
} from './array';
import _ from 'lodash';

class Win {
  // Make a constructor that takes the player's main hand and clones it so it 
  // can remove the sets one by one as a check
  constructor(mainHand) {
    this.mainHand = [ ...mainHand ];
  }

  checkTripleSets = () => {
    // Record number of unique tile instances in hand to table
    const table = createUniqueCounterTable(this.mainHand, "code", (str) => getSubstring(str, 0, 4));

    for (let i = 0; i < Object.keys(table).length; i++) {
      const currentTilePrefix = Object.keys(table)[i].substring(0, 3); // bar
      const currentTileIndex = parseInt(Object.keys(table)[i].charAt(3)); // 2
      const currentTile = Object.keys(table)[i].substring(0, 4); // bar2

      // Find the 2nd in hand -> create func
      // const partialTripleSet = this.mainHand.map(tile => {
        // const index = tile.code.chatAt(3);
        if (Number.isInteger(currentTileIndex)) {
          // console.log(`currentTile: ${currentTile}`);
          
          // See if there is a tile to the left of the current tile
          const left = currentTilePrefix + (currentTileIndex - 1).toString();
          const left2 = currentTilePrefix + (currentTileIndex - 2).toString();
          // console.log(`left tile should look like: ${left}`);
          const leftExists = this.mainHand.find(tile => tile.code.includes(left));
          // console.log(leftExists);

          // See if there is a tile to the right of the current tile
          const right = currentTilePrefix + (currentTileIndex + 1).toString();
          const right2 = currentTilePrefix + (currentTileIndex + 2).toString();
          // console.log(`right tile should look like: ${right}`);
          const rightExists = this.mainHand.find(tile => tile.code.includes(right));
          // console.log(rightExists);

          // If there is no tile to the left of the current tile, and there is 
          // one on the right, check for the second tile on the right
          if ((leftExists === undefined) && (rightExists !== undefined)) {
            const right2Exists = this.mainHand.find(tile => tile.code.includes(right2));
            // console.log(right2Exists);

            if (right2Exists) {
              this.mainHand = this.mainHand.filter(tile => {
                return ((tile.code !== rightExists.code) && (tile.code !== right2Exists.code) && (!tile.code.includes(currentTile)))
              });
              // console.log(this.mainHand);

              if (currentTile && rightExists && right2Exists) {
                console.log(currentTile + " " + rightExists.code.substring(0, 4) + " " + right2Exists.code.substring(0, 4));
              }
            }
          }

          // If there is no tile to the right of the current tile, and there is 
          // one on the left, check for the second tile on the left
          if ((leftExists !== undefined) && (rightExists === undefined)) {
            const left2Exists = this.mainHand.find(tile => tile.code.includes(left2));
            // console.log(left2Exists);

            if (left2Exists) {
              this.mainHand = this.mainHand.filter(tile => {
                return ((tile.code !== leftExists.code) && (tile.code !== left2Exists.code) && (!tile.code.includes(currentTile)))
              });
              // console.log(this.mainHand);
            }
          }


          // switch (tileIndex) {
          //   case 1:
          //     return tile.code.includes(tilePrefix + (tileIndex + 1).toString()) || tile.code.includes(tilePrefix + (tileIndex + 2).toString());
          //   case 9:
          //     return tile.code.includes(tilePrefix + (tileIndex - 1).toString()) || tile.code.includes(tilePrefix + (tileIndex - 2).toString());
          //   default:
          //     return tile.code.includes(tilePrefix + (tileIndex - 1).toString()) || tile.code.includes(tilePrefix + (tileIndex + 1).toString());
          // }
        }
      // }); // const partialTripleSet = this.mainHand.map(tile => {
      // console.log(partialTripleSet);
      // console.log(tilePrefix);
      // console.log(tileIndex);
      // console.log("partialTripleSet: ");
      // console.log(partialTripleSet);
      // Push to a new array if found
      // Start again for the 3rd tile
      // If new array length is 2, filter the main hand of the triple set
      // 
      // console.log(this.mainHand);
    }

  }
  
  hasOnePairOfEyes = () => {
    // Record number of unique tile instances in hand to table
    const table = createUniqueCounterTable(this.mainHand, "code", (str) => getSubstring(str, 0, 4));
    
    // Push only pairs to eyes array
    const eyes = pushSpecifiedCountsToArray(table, 2);

    console.log(`eyes.length: ${eyes.length}`);

    if (eyes.length === 1) {
      this.mainHand = this.mainHand.filter(tile => {
        return !tile.code.includes(eyes[0]);
      });
      console.log("1 pair of eyes detected");
    }
    // console.log(eyes[0]);
    // console.log(this.mainHand);
  }

  hasSelfObtainedPungs = () => {
    // Record number of unique tile instances in hand to table
    const table = createUniqueCounterTable(this.mainHand, "code", (str) => getSubstring(str, 0, 4));
    
    // Push only pungs to array
    const pungs = pushSpecifiedCountsToArray(table, 3);

    if (pungs.length > 0) {
      pungs.forEach(element => {
        this.mainHand = this.mainHand.filter(tiles => {
          return (tiles.code.substring(0, 4) !== element)
        });
      });
      console.log("Removed # of pungs: " + pungs.length);
    }
  }

  hasSelfObtainedKongs = () => {
    // Record number of unique tile instances in hand to table
    const table = createUniqueCounterTable(this.mainHand, "code", (str) => getSubstring(str, 0, 4));
    
    // Push only pungs to array
    const kongs = pushSpecifiedCountsToArray(table, 4);

    if (kongs.length > 0) {
      kongs.forEach(element => {
        this.mainHand = this.mainHand.filter(tiles => {
          return (tiles.code.substring(0, 4) !== element)
        });
      });
      console.log("Removed # of kongs: " + kongs.length);
    }
  }
}

export default Win;