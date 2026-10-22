const name = "vanshika "
const num = 19

console.log(name + num) // this is the old method to concatenate two strings
console.log(`My name is ${name}, and my age is ${num}`) // this is the new method to concatenate two strings

// declaration of a string
const gameName = new String('badminton')
console.log(gameName[1]);  // length -->	Number of characters. It’s a property, so no ().
console.log(gameName.__proto__); 
console.log(gameName.length);
console.log(gameName.at(4)); // at(i) -->	Character at position i. Negative counts from the end.
console.log(gameName.at(-2));
console.log(gameName.charAt(10)); // it gives space in terminal as length of badminton is 9
// charAt(i) -->	Character at position i. Out of range gives "".
let G = "hllo";
let i = 0;
console.log(G.charCodeAt(i)); // charCodeAt(i) -->	Numeric code of the character at i.
 console.log(gameName.toUpperCase()); 
console.log(gameName.indexOf('t'));

console.log("hlw".concat(" ", "JS")); 

const newString =  gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(2, -4)     // we can give negative number in slice, but not in substring
console.log(anotherString);

const newWord = "    capital   "
console.log(newWord);
console.log(newWord.trim());  // trim remove starting and ending spaces, trimStart() and trimEnd()

const url = "https://www.github%20com"
console.log(url.replace('%20' , '-'));
console.log(url.includes('cart'));  // it will answer in true or false

const fruit = new String('apple-grapes-mango-guava')
console.log(fruit.split('-'));  // it will split the string into an array

/*
"5" + 3;   // "53"  ,  + joins the string
"5" - 3;   // 2     ,   - converts to numbers

isWellFormed()	--> true if the string has no broken Unicode characters (lone surrogates).
localeCompare(other) -->	Compares two strings in alphabetical order. Returns a negative number, 0, or a positive number.

Notes on the ones that confuse people
at() vs charAt(): at(-1) gets the last character, which charAt can’t do. Out of range, at() gives undefined but charAt() gives "".
indexOf() returns -1 when nothing is found, so check if (text.indexOf("x") !== -1), or just use includes().
isWellFormed() is rarely used day to day. It’s for checking text before sending it to systems that need valid Unicode.
Like all string methods, none of these change the original string.
localeCompare() is the right way to sort names or product titles: 
 */
let products = ["Mouse", "Keyboard", "Monitor"];
products.sort((a, b) => a.localeCompare(b));
console.log(products); // ["Keyboard", "Monitor", "Mouse"]

 /*
QUESTIONS:- 
What is `"a-b-c".replace("-", "+")`?
"a+b-c"
replace() with a plain string changes only the first match. The second "-" stays.

let s = "cat"; s.toUpperCase(); console.log(s); What is printed?
ANS. "cat"
Strings are immutable. toUpperCase() returns a NEW string and does not change s. Since the result was never saved, s is still "cat". You would need `s = s.toUpperCase()`.

What is `"Mouse".at(10)`?
ANS. undefined
"Mouse" has only indexes 0 to 4. at() returns undefined for an out-of-range index, while charAt() would return an empty string "".


*/
