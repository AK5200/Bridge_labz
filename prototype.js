// Prototype
// allows us to add new methods to objects constructors



// EXAMPLE-1 
function Person(name, age)
{
    this.name = name;
    this.age = age;


}

const me = new Person("John",32)

console.log(me.name)

Person.gender = "Male"

console.log(me.gender)  // undefined



// EXAMPLE-2
function Person1(name,age)
{
     this.name = name
     this.age = age

}

const meUsingPrototype = new Person1("Anupam",22);

// now I want to add age

Person1.prototype.gender;

meUsingPrototype.gender = "Male"

console.log(meUsingPrototype.gender)

const obj2 = new Person1("Deepak", 21);

console.log(Person1)

obj2.gender = "female"

console.log(obj2.gender)