console.log(2>4);

console.log("5" == 5);  // ==` is loose equality. It converts the string "5" to the number 5 before comparing, so the result is true. 
console.log("09"> 78); 

console.log(null < 0 );
console.log(null > 0 );
console.log(null == 0); // null` is loosely equal only to `undefined` (and itself). It is not converted to 0 when you use `==`, so the result is false.
console.log(null >= 0); // Relational operators (>, <, >=, <=) convert null to 0, so 0 >= 0 is true. Yet `null == 0` is false and `null > 0` is false.
//  This is a famous JS quirk, which is why you should always be careful with null.

console.log(undefined == 0);                      // false
console.log(undefined >= 0);                      // false
console.log(undefined == null);                  // true
console.log(undefined > 0 );                     // false
console.log(undefined < 0);                      // false


// USE STRICT OPERATOR FOR SURE CHECK ===

console.log("6" === 6);   // === checks value and its datatype, with no conversion.

/*
What does `null == undefined` return, and what about `null === undefined`?
ans.  true, false
By the language rules, `null` and `undefined` are loosely equal to each other (and to nothing else). But they are different types, so strict equality gives false.

What does `NaN == NaN` return?
ANS:- false
NaN is the only value in JS that is not equal to itself, even with `===`. 

What does `"" == 0` return?
ANS:- true
 The empty string converts to the number 0 during loose comparison, so 0 == 0 is true. This is one reason most developers prefer `===`.

 What does `"10" < "9"` return?
 ANS. true
 When both sides are strings, JS compares them character by character, like a dictionary. "1" comes before "9", so "10" < "9" is true.
 like js compare first cahracter of one string with first character of other string , like here in 10 , 1 compares with 9 , as 1<9 , the result is true.


*/

