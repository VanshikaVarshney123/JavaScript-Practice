// for loop
  for(let index = 0; index<10; index++){
    const element = index * 2;
   console.log(element);
    if(index === 5){
        console.log("index is 5");
    }
  }
  console.log(element);  // it will give error because element is defined inside the for loop and it is not accessible outside the for loop.    

 for(let i = 1; i<= 10; i++){
   console.log(`Outer loop value: ${i}`);
    for(let j = 1; j<= 10; j++){
       console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
    
 }

 // LOOP ON ARRAY
 let myArray = ["s", "f", 89, "happy", "abc17"]
 console.log(myArray.length);
 for( let index = 0; index < myArray.length; index++){  // if in condiditon check we use equal to sign along with '<' sign, then.. it will result an output of 'undefined'
    const element = myArray[index];
    console.log(element);
 }
 
 for(let j = 0; j<= 20; j++){
    if(j === 8){
        console.log(`8 DETECTED`);
        continue;
    }
   console.log(`Integers are: ${j}`);
 }
 
 for(let j = 0; j<= 20; j++){
    if(j === 8){
        console.log(`8 DETECTED`);
        break;
    }
    console.log(`Integers are: ${j}`);
 }
 
 
 
 
