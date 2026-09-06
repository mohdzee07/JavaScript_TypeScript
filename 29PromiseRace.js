//Promise.race->it is display those prmoisis whihc executes faster even if it resolves or error
const c1 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        
        resolve("Suceesful")
    }, 1000);
})

const c2 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        
        reject("Fail")
    }, 5000);
})

Promise.race([c1,c2])
.then(result=>
{
    console.log("The C1 ran:", result)
})
.catch(error=>
{
    console.log("Error", error)
}
)