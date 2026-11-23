let a = 5;
let b = 10;
let c = 3;

let result = ((a < b) | (a < c));
let result1 = ((a < c) | (a > b));
let result2 = ((a < b) | (a < c) | (a > b));
console.log(result);
console.log(result1);
console.log(result2); 

let result3 = ((a < b) & (a < c));
let result4 = ((a < c) & (a > b));
let result5 = ((a < b) & (a < c) & (a > b));
console.log(result3);
console.log(result4);
console.log(result5); 