// In js we can pass a function as a parameter to another function 
// and can call that function after the execution of the first function
// this is called callbacks and it can perform async



// EXAMPLE- 1
const first = (callback, x ,y)=>{
    
    let result = x+y;
    callback(result);
}


const  display = (result) =>{
    console.log(result);
}

first(display,3,4);




// EXAMPLE- 2
const fun = (callback) => {
    console.log("Call fun1 after execution")
    callback()
}

const fun1 = ()=> {
    console.log("fun1 is called")
}

fun(fun1)


// callback hell - situation in js where callbacks are nested within other callbacks
// to the degree where the code is difficult to read.
// oldest way to handle async functions, new we have promises and async/await

function task1(callback){
    setTimeout(()=> {
        console.log("Task 1 Done")
        callback()
    }, 1000)
}

function task2(callback){
    setTimeout(()=> {
        console.log("Task 2 Done")
        callback()
    }, 3000)
}

function task3(callback){
    setTimeout(()=> {
        console.log("Task 3 Done")
        callback()
    }, 1000)
}


// this is the callback hell
// as if there are let say 50 callbacks then the code will no longer be readable
task1( ()=> {
    task2(()=>{
        task3(()=> console.log("All tasks done"))
    })
})



