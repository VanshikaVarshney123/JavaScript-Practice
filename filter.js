const coding = ["js", "cpp", "java"]
 const values = coding.forEach( (item) =>{
    console.log(item);
    return item
 } )
 console.log(values);  // foreach loop do not return anything


// FILTER 
// filter also require callback function and it returns.
const myNums = [1, 3, 35, 6, 4, 16, 9, 23 ]
// const newNums = myNums.filter( (num) => num>10 ) // here we have used just parenthesis..
 const newNums = myNums.filter( (num) => {
    return num > 8 
} ) // here we have used curly braces --> scope ---> when we are using curly braces we have to manually write 'return' keyword
// console.log(newNums);

// if we strictly wanna use foreach then,
const nums01 = [ 3, 5, 3, 7, 1]
const Nums = []
nums01.forEach( (num) => {
    if(num > 2){
        Nums.push(num)
    }
})
console.log(Nums);


const books = [
    {
        title: 'Book01', genre: 'Fiction', publish: 1989
    },
    {
        title: 'Book02', genre: ' Non-Fiction', publish: 1983
    },
    {
        title: 'Book03', genre: 'Fiction', publish: 1986
    },
    {
        title: 'Book04', genre: 'History', publish: 1980
    },
    {
        title: 'Book05', genre: 'Science', publish: 1988
    },
    {
        title: 'Book05', genre: 'Science', publish: 1988
    }
];

// const userbooks = books.filter( (bk) => bk.genre === 'Fiction')
// const userbooks = books.filter( (bk) => bk.publish > 1986)
const userbooks = books.filter( (bk) => {
    return bk.publish >= 1986 
} )
 console.log(userbooks);
