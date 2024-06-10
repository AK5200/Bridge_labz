// call apply bind

var obj ={ name: "Anupam"};

function sayMello(){
    return "Hello " + this.name;
    // here this keyword is not pointing to the onj.name,
    // but instead to the window object (base object in js)
}


console.log(sayMello());


// to make the obj accessible for every function we need call()


var obj ={ name: "Anupam"};

function sayHello(age,friend){
    return `Anupam is ${age} and ${friend} is his friend`;
   
}


console.log(sayHello.call(obj,24,"Ashish"));

// first argument is the obj to call and rest are the parameters
// apply is similar to cal but instead of comma separated args we give the args in an array

var obj ={ name: "Anupam"};

function saykello(age,friend){
    return `Anupam is ${age} and ${friend} is his friend`;
   
}


console.log(saykello.apply(obj,[24,"Ashish"]));


// bind instead of calling here itselves gives us a function which we can call later or reuse the same func with different args


var obj ={ name: "Anupam"};

function sayBind(age,friend){
    return `Anupam is ${age} and ${friend} is his friend`;
   
}


const bindFunc = sayBind.bind(obj);
console.log(bindFunc)

const run = bindFunc(100,"Aman");
console.log(run)

// reusing the same function
console.log(bindFunc(20,"Deepak"))

