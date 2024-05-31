
// function declaration
hello(2); // can be called before declaration (function expressions are hoisted)
function hello(v)
{
    console.log(`Hello ${v}`);
}

hello(1);

// function expresssion
//fun1()  // will give error as function expression are not hoisted

var fun1 = function(){  //no need of giving name to the funtion
    console.log("fun1");
}
fun1();


// arrow function

var arrow = ()=>{
    // arrow fun syntax
    console.log("arrow")
}

arrow();

var arrow1 = (a)=> {
    // parameterized arrow
}

var arrow2 = a => {
    // can omit parentheses if fun has only one parameter.
}



let fun = n => n < 2 ? 1 : n * fun(n-1);
console.log(fun(3));


function map(f,a)
{
    const result = new Array(a.length);
    for(let i=0;i<a.length;i++)
        {
            result[i] = f(a[i]);
        }

        return result;
}

const cube = function(x)
{
    return x*x*x;
}

const num = [1,2,3,4];
console.log(map(cube,num));


// function based on some condition

let obj = {
    make:"range rover"
}

var cond = 0;
if(cond == 0)
    {
        myfun = function (obj)
        {
            obj.make = "Toyota";
        }
    }

    myfun(obj);
    console.log(obj.make)



const foo = function bar() {
    console.log(1);
}

foo();
//bar();  // not accessible outside the function
  


// lexical scoping 
// in nested function a child can access anything from above it (parent, grandparent)
// but not vice-versa, even siblings do not share their vars.

function lexical()
{
    const name = "browser";

    function sayname()
    {
        console.log("name", name);
    }

    sayname();
}

lexical();





