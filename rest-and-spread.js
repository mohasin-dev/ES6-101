 //... rest or spread operator are oposite
 // rest convrt any number of arguments to an array
 function sum(...numbers) {
     //es5
     //  return numbers.reduce(function(prev, current) {
     //      return prev + current;
     //  });
     //es6
     return numbers.reduce((prev, current) => prev + current);
 }

 //console.log(sum(1, 2, 3, 4, 5));

 // spread split an array into arguments to a function
 function sum(x, y) { // 1, 2
     return x + y;
 }

 let nums = [1, 2, 3, 4];

 console.log(sum(...nums))