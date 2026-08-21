// Promise.allSettled():

// Behavior:
// It returns a single promise that is fulfilled with an array of result objects, one for each promise.
// Each result object contains:
// a status (either "fulfilled" or "rejected") and
// a value (fulfilled value) or reason (rejection reason).

// Use Case:
// Useful when you want to process all promises, whether they succeed or fail,
// and you want to gather information about the outcome of each promise.

//case 1-1pass and 1 failed promise

const pass1 = () =>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            
            resolve("It is resolved")
        }, 2000);
    })
}

const pass2 =() =>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            reject("this is rejected")
        })
    })
}

Promise.allSettled([
    pass1(),
    pass2()
])
.then(results=>
{

    results.forEach(result=>
    {
        if(result.status==='fulfilled')
        {
            console.log("value:", result.value)
        }
        else{
            console.log("error", result.reason)
        }
    }
    )
})