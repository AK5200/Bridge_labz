// ERROR HANDLING

// error - an object which is created to represent  problems.
// try{ } - holds code which might cause error
// catch { } - catch and handle thrown error from try { }
// finally { } - optional, will execute no matter what the result os

// try catch blocks does not interrupt the execution of the later program even if there is an error
// without try catch the program will stop executing as soon as it encounters an error.


// EXAMPLE-1
try{
    console.log(x)
}

catch(error)
{
    // type your own message
    console.log(`There was an error`)

    // or use inbuilt
    console.log(error)
}

finally{
    console.log(`finally block`)
}


// EXAMPLE-2
// we can also explicitly throw an error using-  throw new Error(`message`)


try{
    const a = prompt(`Enter your age`)

    if(a < 20)
        throw new Error("You must be at least 20")

}
catch(err)
{
    console.log(err)
}