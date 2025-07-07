/**
 * Shuffles an array in place using Fisher-Yates algorithm.
 * 
 * @param {Array} array 
 * @returns {Array} 
 */
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Original:", numbers);

const shuffled = shuffle([...numbers]); 
console.log("Shuffled:", shuffled);
