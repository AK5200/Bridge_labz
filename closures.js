// Closures is the concept intoduced to run nested functions.
// If there is function x and it is done executing then it will also free all th evariables which were declared in it.
// and even if the inner function which still needs those variables will not be able to access them.
// that is where closures comes in, it is a concept where the inner function will have access to the outer functions varibales (reference not value) even wehen outer is finished.
// lexical scope- ability of a function to acces variables from parent


// example 1
function outer(outerVar)
{
    return function inner(innerVar)
    {
        console.log('Outer Variable: ' + outerVar)
        console.log('Inner Variable: ' + innerVar)
    }
}

const newFunction = outer("outer function")

// console.log(outerVar) gives error as outer function is finished

newFunction("inner function") // runs without any error (cosure)



// example 2
function fun()
{
    let a = 1;
    //return function fun1() if return is here then logs 1
    {
        console.log(a);
    }
    a = 2;
    return fun1 // if return is here then logs 2
    // because the child function has access to the reference of the variable not the fnction

}

const call = fun();
call()


