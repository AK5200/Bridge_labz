// Datatypes

// 1-number
let number = 10;
console.log(number);

// 2-String
let string = "Anupam";
console.log(string);

// 3-Booleans
let bool = true;
console.log(bool);

// 4-Object
let person = {
    firstName:"Anupam",
    lastName: "Kumar"
}

console.log(person);

// 5-Array
const arr = ["Anupam", "Kumar", 33, ()=>{}];
console.log(arr);

// 6-Date Object
const date = new Date("2022-03-24");
console.log(date);


// 7-BigInt
let num = BigInt("1234")
console.log(num);

// 8-undefined
let unknown; // undefined type and value
console.log(typeof(unknown));

// 9-Sybmol
let email = Symbol();
let employee = {};
employee.name = 'Anupam';
employee.age = 53;
employee[email] = 'test'

console.log(Object.keys(employee));  // email will be hidden
