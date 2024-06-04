// async/await

function task1() {
    
    return new Promise( (resolve,reject)=>{
        setTimeout(
            ()=>
                {
                    let error = 0;
                    if(!error)
                        {
                            resolve("Task1 is done")
                        }
                        else{
                            reject("Task1 failed")
                        }

                },100)
    })
}


function task2(){
    return new Promise( (resolve,reject)=>
    {
        setTimeout(
            ()=>{
                let error = 0;
                if(!error)
                    {
                        resolve("task2 is done")
                    }
                    else{
                        reject("task2 failed")
                    }
            }
            ,200)
    })
}


async function resolvePromise()
{
    try{

        const response = await task1();
        console.log(response)

    }
    catch(error)
    {
        console.log(error)
    }

    try{

        const response = await task2();
        console.log(response)

    }
    catch(error)
    {
        console.log(error)
    }


}

resolvePromise()
