/ remember always, when we open scope, we have to write 'return' keyword manually , to get the return
 // map returns
 const myNums = [1, 4, 2, 6, 3 , 8]
//  const newNums = myNums.map( (num) => {return num + 10} )
// console.log(newNums);

 // CHAINING METHOD
 const newNums = myNums
                        .map((num) => num * 10)
                        .map((num) => num + 2)
                        .filter((num) => num >= 32)

console.log(newNums);
