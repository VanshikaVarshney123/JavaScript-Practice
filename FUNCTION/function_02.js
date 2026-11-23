function calculateCartPrice(...num1){ // Rest parameter
    return num1;
 }
 console.log(calculateCartPrice(100, 23, 904, 4284));  // gives an array of all the values passed in the function, here num1 is an array of all the values passed in the function.
  
 function calculateCartPrice1(val1, val2, ...num1){ // here 2 values are passed in the function and rest of the values are stored
    return num1;
 }
 console.log(calculateCartPrice1(100, 23, 904, 4284)); 

 // OBJECTS IN FUNCTION
 const user = {                   // user is an object
    username: "Vanshika",
    price : 299
 }
 // object ko function me kaise pass karte hai
 function handleObject(anyObject){  // anyObject is a parameter which will take the object passed in the function
    console.log(`Username: ${anyObject.username}`);  // here we are accessing the username property of the object passed in the function
    console.log(`Price: ${anyObject.price}`);  // here we are accessing the price property of the object passed in the function
 }
 handleObject(user);  // here we are passing the user object to the function
 // JARURI NAHI KI PEHLE OBJECT BANAE PHIR USKO FUNCTION ME PASS KARE, DIRECTLY BHI PASS KAR SAKTE HAI
 handleObject({username: "Aryan", price: 299});  // here we are passing the object directly to the function

 // ARRAYS IN FUNCTION
 const myNewArray = [1, 2, 3, 4, 5]
function returnSecondValue(getArray){  // getArray is a parameter which will take the array passed in the function
    return getArray[1];  // here we are returning the second value of the array passed in the function
}
console.log(returnSecondValue(myNewArray));  // here we are passing the array to the function and logging the second value returned by the function
console.log(returnSecondValue([10, 20, 30, 40, 50]));  // here we are passing the array directly to the function and logging the second value returned by the function
