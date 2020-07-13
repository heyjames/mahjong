import {
  createUniqueCounterTable,
  pushSpecifiedCountsToArray,
  getSubstring
} from './array';

class Win {
  hasOnePairOfEyes = (mainHand) => {

    // Record number of unique tile instances in hand to table
    const table = createUniqueCounterTable(mainHand, "code", (key) => getSubstring(key, 0, 4));
    
    // Push only pairs to eyes array
    const eyes = pushSpecifiedCountsToArray(table, 2);
    
    // console.log(mainHand);
    // console.log(`There are ${eyes.length} eyes in your hand.`);

    return (eyes.length === 1) ? true : false;
  }
}

export default Win;