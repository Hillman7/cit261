// Exercise 1

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

// three parameters array, thing to combine , start
//reduce(arrays[0],combine,1);
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// Exercise 2

// Your code here.

function loop(value,testFunction,updateFunction,bodyFunction)
{
 // exit value
for (let i = value; testFunction(i); i = updateFunction(i))
{
  bodyFunction(i);

}
    
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// exercise 3


function every(array, test) {


  for (let element of array) {
  // if it failed the test return false
    if (!test(element)) return false;
  }
  return true;
}

function every2(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


// exercise 4

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl



// end chapter 5