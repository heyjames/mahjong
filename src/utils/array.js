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

export { sortArray, shuffleArray };