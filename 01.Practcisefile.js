// const promise1 = Promise.resolve("Pizza");
// const promise2 = Promise.resolve("Burger");
// const promise3 = Promise.resolve("Juice");

// Promise.all([promise1, promise2, promise3])
// .then((results) => {
//     console.log(results);
// });

const f1 = new Promise((resolve,reject)=>
{
    resolve("f1 print")
})
const f2 = new Promise((resolve,reject)=>
{
    resolve("f2 print")
    //reject("error")
})

Promise.all([
    f1,f2
]).then((result1)=>
{
    console.log("Approved:", result1)
}).catch((error)=>
{
    console.log("Error:", error)
})