// This might be the funniest js file you've seen

// What is Big O
// Big O is a way to categorize your algorithms time or memory requirements based on input.

// O(N^2)
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      sum++;
    }
  }

  return sum;
}
// O(N^3)
function sum_char_codes1(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      for (let k = 0; k < n.length; ++k) {
        sum++;
      }
    }
  }
  return sum;
}
// O(n log n) - Quicksort
// O(log n) - Binary search trees

//ARRAYS
const a = []; // is not an array
