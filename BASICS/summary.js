// PRIMITIVE DATATYPE :- string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.4

const isLoggedIn = false

// REFERENCE DATATYPE :- object, array, function
/* 
Other things to remember
Strings are immutable. You can’t change a character in place, only create a new string.

typeof quirks: typeof null gives "object" (a famous old bug in JS), and typeof [] also gives "object".

Comparison: primitives compare by value (5 === 5 is true), but objects compare by reference, so {} === {} is false because they’re two different objects.

const does not make objects frozen. It only stops you from reassigning the variable. You can still change what’s inside.
This is a long-standing bug in JavaScript that was never fixed to avoid breaking old websites. null is actually a primitive, even though typeof says "object".

What does `typeof [1, 2, 3]` return?
ANS. object
Arrays are a special kind of object, so typeof gives "object". To check for an array, use Array.isArray(value).

What is printed? let a = { x: 1 }; let b = { ...a }; b.x = 2; console.log(a.x);
ANS. 1
The correct answer is 1.The spread operator {...x} creates a brand-new object, so b is independent of a. Changing b.x leaves a.x as 1.

What happens here? const cart = []; cart.push("shoe");
ANS:- It works, and cart becomes ["shoe"]
const only prevents reassigning the variable (cart = something else). The array's contents can still be changed, so push() works fine.

What is printed? let s = "hello"; s[0] = "J"; console.log(s);
ANS:- "hello"
Strings are immutable. Assigning to s[0] is silently ignored (in non-strict mode), so s stays "hello". To change it you must create a new string.

Bug report: after a user adds a shoe to the cart, the catalog shows the wrong quantity. const product = { name: "Shoe", price: 2000, qty: 1 }; const cartItem = product; cartItem.qty = 3; console.log(product.qty); What is printed?
ANS:- 3
 The correct answer is 3.cartItem and product are the SAME object (copy by reference). Changing cartItem.qty also changes product.qty. In a real store, this bug means adding to cart silently changes the catalog.

 Which line gives the cart its own independent copy of a flat product object?
 ANS... const cartItem = {... product};
The correct answer is const cartItem = { ...product };.Only the spread operator creates a new object. valueOf() on a plain object returns the same object, and Object(obj) also returns the same object, so both still share a reference with product.

function applyDiscount(price) { price = price * 0.9; } let mrp = 1000; applyDiscount(mrp); console.log(mrp); What is printed?
ANS. 1000
Numbers are primitives, so the function receives a copy of the value. Changing the parameter inside the function does not affect the original variable mrp.

function applyDiscountObj(item) { item.price = item.price * 0.9; } let laptopDeal = { price: 1000 }; applyDiscountObj(laptopDeal); console.log(laptopDeal.price); What is printed?
ANS. 900
The function receives a reference to the same object, so item.price = ... modifies the original object. Functions can change objects passed to them, which is a common source of hidden bugs.

function resetPrice(item) { item = { price: 0 }; } let phone = { price: 500 }; resetPrice(phone); console.log(phone.price); What is printed?
ANS. 500
Inside the function, `item = { price: 0 }` only re-points the local parameter to a brand-new object. It does not change the original object, so phone.price stays 500. Mutating a property (previous question) and reassigning the parameter behave very differently.

Bug report: editing a copied order changes the original order's items. const order = { id: 1, items: ["pen", "book"] }; const copy = { ...order }; copy.items.push("bag"); console.log(order.items.length); What is printed?
ANS. 3
Spread makes a SHALLOW copy. The top-level object is new, but the nested items array is still shared. So pushing to copy.items also changes order.items. For a deep copy, use structuredClone(order).

const a = [1, 2]; const b = [1, 2]; console.log(a == b, a === b, a.toString() === b.toString()); What is printed?
ANS. false false true
== and === on arrays compare references, and a and b are two different arrays, so both are false. Converting both to strings gives "1,2" and "1,2", which are equal primitives, so the last one is true.

Bug report: a wishlist heart icon never shows as 'added'. const wishlist = [{ id: 1 }, { id: 2 }]; console.log(wishlist.includes({ id: 1 })); What is printed?
ANS. true
The correct answer is false.includes() uses strict comparison. The { id: 1 } you pass is a brand-new object, a different reference from the one in the array, so it returns false. The fix is to compare a property, e.g. wishlist.some(p => p.id === 1).

A user types 3 in the quantity box. Your code reads it as a string. const qty = "3"; const price = 100; console.log(qty * price, qty + price); What is printed?
ANS. 300 3100
The correct answer is 300 and "3100".Values from input boxes are always strings. `*` forces conversion to numbers, so "3" * 100 = 300. But `+` with a string does concatenation, so "3" + 100 = "3100". This is why you must convert input with Number() before doing price math.

const config = Object.freeze({ currency: "INR", tax: { gst: 18 } }); config.currency = "USD"; config.tax.gst = 5; console.log(config.currency, config.tax.gst); What is printed?
ANS. INR 5
The correct answer is INR 5.Object.freeze is shallow. The top-level property currency can't be changed (silently ignored), but the nested tax object is not frozen, so gst becomes 5. Shallow vs deep is a recurring theme with reference types.


*/
