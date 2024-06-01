// var let const
// var-- hoisted,  scope-function
// let-- scope-block introduced in ES6
// const-- socpe-block, requires initial value, cannot reassign.


function v()
{
    a = 0;
    var a = 10;
    a = 20;
    console.log("inside function v",a)
    if(a==20)
        console.log("inside if condition v",a);
}
//console.log(a); // cannot be accessed from here.
v()


function l(){
   // b = 0; error, let is not hoisted
    let b = 20;
    b = 30;
    console.log("inside function l",b);
    if(b==30)
        console.log("inside if condition l",b)
    
}

//console.log("outside function",b)  error
l()

function c()
{
    // not hoisted
    //const c; error, must be initialized
    const c = 10;
    //c = 30; error
    console.log("inside function c", c);
    
    if(c==30)
        console.log("inside if condition c",c);
}

//console.log("outside function",c) error
c()


const a = {
    p1:10,
    p2:20
}

a.p1 = 0; // allowed 

// but we cannot change a 

/*a = {
    b:10
}

error
*/


// var can be used without initialization, by default it takes undefined
var b;
console.log(b); // undefined 

// let and const will throw error


