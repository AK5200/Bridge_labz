// Javascript is a single threaded async no-blocking language

// Inside a function the process follows sync, but a special feature in js called promises can be used to run async


//sync

let fun1 = function()
{ console.log("1");}

let fun2 = function()
{
    console.log("2");
}

let fun3 = function()
{
    console.log("3")
}

fun1();
fun2();
fun3();



// Async
// the async functions have a seperate call stack that runs after the sync stack

function first()
{
    console.log('one');
}

function second()
{
    console.log('two');
}

setTimeout(first,0);
second();

// even though the first function has a set time out as 0 but still the second runs first, becoz of the different call stack.
// async call stack runs after the sync call stack

