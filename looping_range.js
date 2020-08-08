// function that takes 3 integer parameters (start, end, and step) and
// returns an array of numbers from start to end counting by step.

const range = function (start, end, step) {
  const numbers = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    console.log('The arguments passed to the function are not valid.')
  }
  else {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    } 
  }
  return numbers
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));