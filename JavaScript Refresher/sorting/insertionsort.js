//we sort our array by largest left half
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

const results = insertionSort([2, 14, 55, 32, 12, 43, 23]);
console.log(results);
