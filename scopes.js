var c = 300
 let a = 43
 if(true){
    let a = 100
    const b = 200
    console.log(a) // 100 
 }

 console.log(a) // 43

 // DOM - DOCUMENT OBJECT MODEL




 // NESTED SCOPES IN FUNCTIONS
 function one(){
    const myName = "Vanshika"

    function two(){
        const website = "instagram"
        console.log(myName) // Vanshika
    }
    two() // function two is called, so it can access the variables of function one and function two
    }
    one() // function one is called, so it can access the variables of function one and function two
 
if(true){
    const username = "Vanshika"
    if(username === "Vanshika"){
        const website = " instagram"
        console.log(username + website)  
    }
    // console.log(website);
}
// console.log(username);
console.log(addOne(4))  
function addOne(num){
    return num + 1
}

//  console.log(func(9)) // will give error, because func is a function expression, so it will not be hoisted, so we can not call it before it is defined.
const func = function(num){
    return num + 2
}
console.log(func(9))
