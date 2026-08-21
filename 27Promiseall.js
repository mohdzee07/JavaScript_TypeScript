//Promise.all() is commonly used when we want to perofrm multiple async operations 
// in parallel and wait for all of them to complete befre moving in
//Promise.all is used when want to combine all the promises together as O/P
//Promise.all is executed when all the functions are fullied(reolsved) else it goes in error
/*const apifunction1 = () =>{
       return new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
          resolve("API1 executed")
    },2000)
})
}

const apifunction2 = () =>{
       return new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
          resolve("API2 executed")
    },2000)
})
}


Promise.all([
     apifunction1(),
     apifunction2()
]).then((array)=>
{
    console.log("Executed1", array)
})
.catch(error=>
{
    console.log("Erro caught:", error)
})
*/

//case 2:
//Fun1()-->resolved, Func2()-->rejected

const getdata1 = () =>{
       return new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
          resolve("API1 executed")
    },2000)
})
}

const getdata2 = () =>{
       return new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
          reject("Error: Data is not avaialble")
    },2000)
})
}

Promise.all([
     getdata1(),
     getdata2()
]).then((array1)=>
{
    console.log("Executed1", array1)
})
.catch(error=>
{
    console.log("Erro caught:", error)
})

