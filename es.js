// ES PROPERTIES

// ES6 (2015) 
// 1. CLASS

class Animal
{
    constructor(name,color)
    {
        this.name = name;
        this.color = color;
    }

    toString()
    {
        console.log(`name: ${this.name} and color: ${this.color}`);
    }

}

var animal = new Animal('dog','brown')
animal.toString();


class Cat extends Animal
{
    constructor(action)
    {
        super('cat','white');
        this.action = action;
    }

    toString()
    {
        return `${super.toString()} and action: ${this.action}`
    }
}

var cat = new Cat('catch')




// function default value, if no value is given
function fun1(height = 50, weight = 20){
    console.log(height+weight)
}
fun1(10)



// template literal `${}`

// destructuring array
const arr = [1,2,3,4,5];
const [one,two,,,five] = arr;
console.log(five)



// destructuring object
const obj = {
    name: 'anu',
    age: 38,
    city: 'bangalore'
}
const {name, age} = obj;
//   should be same as object keys

console.log(name)




// spread operator
const spread = ['anupam','ryan']
const spread1 = ['sara', ...spread,'mon'];
// spread operator can spread out the value in any other place
console.log(spread1)


// object shorthand
const shorthand = {
    //name:name, //before
    //city:city, //before

    //after es6
   // name,
   // city
}


// .include() whether a value is present in an array
const inc = [1,2,3,4,5];
console.log(inc.includes(5))
// returns bool



// Object.values() returns object values
const valuesObj = {
    a:1,
    b:2,
    c:3,
    d:4
}

console.log(Object.values(valuesObj)) // returns value
console.log(Object.keys(valuesObj))  // returns keys
console.log(Object.entries(valuesObj))  // returns key:val pair




// .padStart() & .padEnd()
// adds padding () 5 is the total number of array including padding and elmements
console.log("100".padStart(5,'197')) // 19100
console.log("100".padEnd(5,'197')) // 10019


// .getOwnPropertyDescriptors()
const descObj = {
    a:1,
    b:2,
    c:3
}











