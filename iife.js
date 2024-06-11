// IMMEDIATLY INVOKED FUNCTION EXPRESSION

// used when we want a function to execute immediatly
// use case- we can get rid of getting polluted from the global scope
// as in global scope same name variables can exist which can pollute our functional scope

//( function declaration ) () 

          // named iife can be written without name aswell
( function func() {
    console.log(`DB Connected`);
})();


( (name)=> {
    console.log(`DB2 connected ${name}`);
})("anu")