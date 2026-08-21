//Prmise.any()--> it is will give the first fullfilled or resolved promise
//Even if it has failed/error function, first it it will display the first promise that got fullfilled

const a1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("THis is resolved")
    },1000)
})

const a2 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        reject("this is rejeced")
    },300)
})
const a3 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        reject("This is agin resolved")
    },5000)
})


Promise.any([a1,a2,a3])
.then(result=>
{
    console.log("Success", result)//thi will execute even if one promise if fullfillled
}
)
.catch(error=>
{
    console.log("error",error)//this block will execute only if all 3 promises fails/reject
}
)