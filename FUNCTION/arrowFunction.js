const user ={
    username: "Vanshika",
    price: 299,

    welcomeMessage: function(){
      //  console.log(`Welcome ${this.username}`);  // this keyword is used to access the properties of the object, here this.username is used to access the username property of the user object
       // console.log(this);
    }
 }
 // this current context ki baat krta h
 user.welcomeMessage();  // here we are calling the welcomeMessage method of the user object, which will log the welcome message with the username property of the user object
 user.username = "Aryan"  // here we are changing the username property of the user object to "Aryan"
 user.welcomeMessage();  // here we are calling the welcomeMessage method of the user object, which will log the welcome message with the updated username property of the user object
 // console.log(this); // {}, because this is used in the global context, so it will log the global object, which is an empty object in node.js, but in browser it will log the window object
  // beacause we are in node environment, so this will log an empty object, but in browser it will log the window object, because in browser this is used to access the global object, which is window object in browser.

  const chai = function(){
    let username = "Vanshika"
  //  console.log(this); // {}, because this is used in the global context, so it will log the global object, which is an empty object in node.js, but in browser it will log the window object
   //  console.log(this.username); // undefined, because this is used in the global context, so it will log the global object, which is an empty object in node.js, but in browser it will log the window object, and window object does not have a property called username, so it will log undefined
  }
  chai();  // here we are calling the chai function, which will log the global object and the value of the local variable username


  //  MORE WAYS TO DECLARE FUNCTIONS, USING ARROW FUNCTION
  const cherry = () => {
    let username = "Vanshika"
   // console.log(this); // {}, because this is used in the global context, so it will log the global object, which is an empty object in node.js, but in browser it will log the window object
  }
    cherry();  // here we are calling the cherry function, which will log the global object and the value of the local variable username

    // BASIC ARROW FUNCTION 
    const addTwo = (num1, num2) => {
        return num1 + num2
    }
  //  console.log(addTwo(4, 5));  // here we are calling the addTwo function, which will return the sum of num1 and num2, which is 9

    // IMPLICIT RETURN IN ARROW FUNCTION
    const add = (num1 , num2) => num1 + num2  // here we are using implicit return in arrow function, so we don't need to use return keyword, it will automatically return the value of num1 + num2
  //  console.log(add(9, 5));  // here we are calling the add function, which will return the sum of num1 and num2, which is 14

     const add_two = (num1 , num2) => (num1 + num2)
   //  console.log(add(9, 0)); 
// EXPLICIT RETURN, WHEN U USE RETURN KEYWORD WITH CURLY BRACES.


// const add_f = (num1 , num2) => (username: "ruby"); // here we are returning object `ruby` ........... and this will show error
const add_2 = (num1 , num2) => ({username: "ruby"})
console.log(add_2()) 
