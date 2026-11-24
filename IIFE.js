/* global scope ke pollution se bchne ke liye hm IIFE ka use krte h.. 
 like we call function... for example..chai().... but in IIFE we will just do..
  ()() .. because this time we are wrapping the function in parenthesis
 */

  // IIFE - Immediately Invoked Function Expression
  // named iife 
  (function days(){
    console.log("IIFE is called");
  }) (); // AGR YE SEMICOLON NHI LGATE TO code editor aage ke function ko bhi same hi maanta or confuse ho jata.. so to complete a function we apply semicolon at the end of the function, so that it will not confuse the code editor and it will not give any error.
  
  // simple iife
  (() => {
    console.log("DATABASE is connected");
  })();
  // another form of above function
  (function aurcode(){
    console.log("aurcode is called");
  }) ();

  ((name) => {
    console.log(`DATABASE is connected to ${name}`);
  })("CHAMP"); 

  /*
  and if interviewer asks you to write 2 IIFE in one file, 
  then you have to write two seperate iife, just by seperating them with a semicolon, 
  because if you write them without a semicolon, 
  then the code editor will get confused and it will give an error, so to avoid that we have to write a semicolon at the end of the first iife, so that the code editor will not get confused and it will not give any error.
  */
