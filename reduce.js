// reduce takes two parameters:- accumulator and currentValue
 const myNums = [3, 5, 7, 2, 9]
 
   const total = myNums.reduce(function (acc, curr_val){
    console.log(`acc: ${acc} and current value is ${curr_val}`);
    return acc * curr_val
 }, 1)       // AND THE VALUE 1 GIVEN HERE IS ACCUMULATOR'S VALUE

 console.log(total) 

 // IN ARROW FUNCTION
const total_1 = myNums.reduce((acc, cur) => acc + cur, 0)
console.log(total_1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 399
    },
    {
        itemName: "python course",
        price: 299
    },
    {
        itemName: "C++ course",
        price: 699
    },
    {
        itemName: "ruby course",
        price: 1299
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log( "U Have to pay:" , priceToPay, "rupees");
