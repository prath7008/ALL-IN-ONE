// i from endof array
// inner loop j from0 to i-1

function bubblesort(array) {
  let isSwapped;
  for (let i = array.length; i > 0; i--) {
    isSwapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      isSwapped = true;
    }
    if (!isSwapped) {
      break;
    }
  }
  return array;
}
const result = bubblesort([2, 3, 1, 354, 12, 54, 89]);
console.log(result);
