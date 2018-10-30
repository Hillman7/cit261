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
  if (!testFunction(value))
  {
    console.log("exit");
   return;
  }
  
  console.log(value);
  
  
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


// not done yet