const icecream = new Promise((resolve,reject)=>
{
    let icecreamvailable = true;

    if(icecreamvailable)
    {
        resolve("Here is your icecream")
    }
    else{
        reject("no ice cream today")
    }
})

icecream.then((result)=>
{
    console.log(result)
})
.catch((error)=>
{
    console.error("Error:" , error)
})