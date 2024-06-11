// Introduced in ES6



// EXAMPLE 1
class TicketForm
{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }

    // inside a class we don't need function method
    displayTicket()
    {
        console.log (`${this.name} booked the ticket succesfully for INR ${this.price}`)
    }

}

const ticket1 = new TicketForm("Anupam",2500)
const ticket2 = new TicketForm("Anurag",3200)

ticket1.displayTicket();
// Anupam booked the ticket succesfully for INR 2500



// EXAMPLE 2

class TicketForm1
{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }

    displayTicket()
    {
        return`${this.name} booked the ticket succesfully for INR ${this.price}`
    }

}

// here dispaly fun is returning a string rather than directly consoling it

const ticket3 = new TicketForm1("Deepak",12)

// conssole.log(ticket3.displayTicket())

const details = ticket3.displayTicket();

console.log(details)


// EXAMPLE 3
// Static methods, no need to create any object can be accessed directly from class

class e3
{
    static sayHello()
    {
        console.log("hello")
    }
}

const exapmle3object = new e3();

// example3object.sayHello();  // error

e3.sayHello()   // hello


// EXAMPE 4 
// private properties in class start with #
// super calls constructor of parent class.

class Animal
{
    #a;  // private field
    constructor(name)
    {
        this.name = name;
    }
    speak()
    {
        console.log(`${this.name} makes noise`)
    }
}

class Dog extends Animal
{
    constructor(name)
    {
        super(name) //super keyword calls parent class constructor with the same parameter
    }
}

const dogObj = new Dog("Labra")
dogObj.speak();


