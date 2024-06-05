const fruits = ["Banana", "Orange", "Apple", "Mango"]


// .length()
console.log(fruits.length)


// .toString() converts array to a string comma separated
console.log(fruits.toString())

// .at()
console.log(fruits.at(2))
console.log(fruits[2]) // works same

// .join() similar to toString but user can specify seperato
console.log(fruits.join("*"))


// push() and pop()
fruits.pop(); // Mango deleted 
console.log(fruits)
fruits.push("kiwi") // kiwi added
console.log(fruits)

// .shift()
// removes first element and brings other ele one index down
fruits.shift()
console.log(fruits)

// .unshift() adds element from the start
fruits.unshift("Guava")
console.log(fruits)


// delete --leaves empty 
// delete fruits[0];
// console.log(fruits)

// concat()
const veggies = ["Beans", "carrot"]
const merge = fruits.concat(veggies)

console.log(fruits.concat(veggies));

const mergeAll = fruits.concat(veggies,merge)

console.log(mergeAll)

const addOne = fruits.concat("apple")

console.log(addOne)


// .flat()
const arr1 = [[1,2],[2,3]]
console.log(arr1.flat())
// makes it one single array


// .splice()  --adds new item to an array  and can delete old items
const fruits1 = ["Banana", "Orange", "Apple", "Mango"]
fruits1.splice(2,0,"lemon","kiwi")
//   star from 2   delete 0 elements , elements
console.log(fruits1)

fruits1.splice(0,3,"grape")
console.log(fruits1)
// grape kiwi apple mango

console.log(fruits1.splice(0,1))
// grape
console.log(fruits1)
// kiwi apple mango


// .toSpliced --make a new array and dosen't change original
const months = ["jan","feb","mar"]
const spliced  = months.toSpliced(0,1) // splice / toSplice can also be used to just delete element  // 1st start 2nd how many elements
console.log(months)
console.log(spliced)


// .slice() --just deleted eleemts
// creates new array original array remains same
const fruits3 = ["Banana", "Orange", "Lemon",'a','b','c','d']
const fruits4 = fruits3.slice(1) // deletes 1 element from start fruits4- Orange, lemon
const fruits5 = fruits3.slice(2) // deletes 2 element from start fruits4-  lemon 
console.log(fruits4)
console.log(fruits5)
const fruits6 = fruits3.slice(1,3) // 1 is the starting index, 3 ending but ending is not included
console.log(fruits6)


// converts tostring
const str = fruits3.toString()
console.log(str)