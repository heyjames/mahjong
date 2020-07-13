const sortArray = (a, b) => {
  const nameA = a.code.substring(0, 5).toUpperCase();
  const nameB = b.code.substring(0, 5).toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0; // names must be equal
}

// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const getSubstring = (str, start, end) => {
  return str.substring(start, end);
}

const createUniqueCounterTable = (arr, property, callback=null) => {
  const table = {};

  for (let i=0; i<arr.length; i++) {
    let key = arr[i][property];
    if (callback !== null) key = callback(key);

    if (table.hasOwnProperty(key)) {
      table[key] = table[key] + 1;
    } else {
      table[key] = 1;
    }
  }

  return table;
}

const pushSpecifiedCountsToArray = (table, desiredCount) => {
  const arr = [];

  for (let j=0; j<Object.keys(table).length; j++) {
    if (table[Object.keys(table)[j]] === desiredCount) {
      arr.push(Object.keys(table)[j]);
    }
  }

  return arr;
}



export {
  sortArray,
  shuffleArray,
  createUniqueCounterTable,
  pushSpecifiedCountsToArray,
  getSubstring
};