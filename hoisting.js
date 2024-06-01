// things that can be accessed before they are intitialized
// the regular function declarations are hoisted
// but arrow and expressions are not
// in variables also var is hoisted and others are not.

console.log(a); // undefined as js automatically puts var declarations at the top of the code, var a = undefined. (does not throws error)
var a = 1;

// console.log(b); // throws error
// let b = 2;

// console.log(c); // throws error
// const c = 3;


hoist()
function hoist()
{
    const a = 10, b = 20;
    console.log(a+b);
}


//hoist1() throws error
let hoist1 = function ()
{
    const a = 10, b=20;
    console.log(a+b);
}


//hoist2() throws error
let hoist2 = () => 10+20;
