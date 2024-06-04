promises
Introduced in ES6


const fun2 = new Promise( (resolve, reject) => {
    setTimeout(function(){
        let error = 0;
        if(!error)
            resolve({
        username: "anu",
        roll: 20
        })
        else
        {
            reject("ERROR")
        }
    },1000)
})

// don't call fun2, as it is a promise not a function
fun2.then( user => console.log(user) ).catch()



const fun3 = function(){
    {
        return new Promise( (resolve, reject) => {
            setTimeout(function(){
                let error = 0;
                if(!error)
                    resolve({
                username: "anu",
                roll: 20
                })
                else
                {
                    reject("ERROR")
                }
            },1000) } )

    }
}

    
fun2.then( user => {console.log(user); return user.username;})
.then( (username)=> console.log(username))
.catch( error => console.log(error))
.finally( ()=> console.log("Promise finished"))


//the above promise can also be handeled by async/await
// async await dosen't handle like .then .catch so we need to put it in a try/catch block
async function consumePromise()
{
    try{
        const response = await fun3()
        console.log(response)
    } catch(error)
    {
        console.log(error)
    }
}

consumePromise()




const fun4 = new Promise( (resolve,reject)=>
{
    setTimeout( function(){
        const error = 0;

        if(!error)
            {
                resolve({
                    username: "Anupam",
                    email: "anu@gmail.com"
                })
            }

            else
            {
                 console.log(error)
            }
    },1000)

}
)


fun4
.then( (user)=> user.email )
.then( (email) => console.log(email))
.catch( (error)=> console.log(error))


 async function promiseResolve()
 {
    try{
         const response = await fun4
         const email = response.email;
         console.log(email)
    }
    catch(error){
          console.log(error)
    }
 }

 promiseResolve()


const container = function (){

    return new Promise( (resolve,reject)=>
    {
        setTimeout(
        ()=>
            {
                const error =0;

                if(!error)
                    {
                        resolve({
                            Name:"Anupam",
                            Stack:"MERN"
                        })
                    }
                    else
                    {
                        reject("E:Error")
                    }

            },1000)

    })
}


// here we need to call the function as promise is inside container
container()
.then( user => user.Stack )
.then( user => console.log(user))
.catch( (error)=> console.log(error))









