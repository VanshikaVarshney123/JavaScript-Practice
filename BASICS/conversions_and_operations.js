let score = "56fhh";

/* console.log(typeof score);
console.log(typeof score); */

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

let v = true; // null 
// console.log(typeof v);
// console.log(v);
let p = Number(v);
// console.log(p); 

let k = undefined;
// console.log(typeof k);

let g = 1
let booleanConv = Boolean(g)
// console.log(g);

let s = 345
let stringConv = String(s);
console.log(stringConv);
console.log(typeof stringConv);


/* 
"45" => 45
"34bf" => NaN
true  => 1
false => 0
"" => false
"dolly" => true

if (2 + 4 + "8") = 68 
("6" + 4 + 8) = 648 because in JS , operator which comes first, operation will perform according to that.
here JS performs type-coercion (automatic conversion ), y=turning numbers into strings for concatenation.

*/

