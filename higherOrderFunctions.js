// A functions which takes a function as an argument or returns a function are call higher order functions






// forEach
// const coding = [1,2,3,4,5];


// // if function is declared inside forEach it should not have any name.
// forEach by default has (element,index,array)

//   coding.forEach( function(ele) {
//     console.log(ele+1)
// })

// coding.forEach( (ele)=> {
//     console.log(ele);
// })



// function add(ele)
// {
//        console.log(ele*2);
// }

// coding.forEach(add); // don't call here

// // forEach has (item,index,array)

// const obj = [
//     {
//         first : "anu",
//         last : "kum"
//     },
//     {
//         first: "f",
//         last: "l"
//     }
// ]

// obj.forEach( (item)=>{

//     console.log(item.last);
// })


// filter
// forEach cannot return anything
// for returning things we have other functions- filter,map,reduce

// const nums = [1,2,3,4,5]

// function diff(ele)
// {
//     return ele>2;
// }

// const newNums = nums.filter(diff)
// // filter can return stuff, that is why we have a var newNums 
// // which is storing whatever is being returned.

// console.log(newNums)

//map
// does not filters rather performs operation on each element of the array

// const arr = [1,2,3,4,5];

// const m = arr.map( (ele) => {
//     return ele*10;
// })

// console.log(m);

// // we can also do method chaining here

// const n = arr.map( (ele)=> ele+1)
//              .map( (ele)=> ele*2)
//              .filter( (ele)=> ele > 10 );

// console.log(n)


// reduce (accumalator, currentvalue)

const array = [1,2,3,4];

const  total = array.reduce( function(acc,curr)
{
     return acc+curr

},0)
//initial value  arr.reduce( (fun) , initial value of accumulator)


const myTotal = array.reduce( (acc,curr)=>  acc+curr, 0)

console.log(myTotal);


