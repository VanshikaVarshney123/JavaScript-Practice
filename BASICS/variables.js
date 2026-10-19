const accountId = 14993
let accountEmail = "vanshika23@gmail.com"
var accountPassword = "893749"
accountCity = "Delhi"
let accoumtState; // its value is undefined

// accountId = 4  , not allowed
acountEmail = "jkdjk@gamil.com"
accountCity = "jaipur"
accountPassword = "123456"

console.log(accountId);
console.table([accountId, accountPassword, accountEmail, accountCity, accoumtState])  // this console.table([]), do set data in table format (index starting with 0, with their respective values)

/* 
 prefer not to use var because of issue in block scope and functional scope
 */ 
