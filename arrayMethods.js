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


// delete --
