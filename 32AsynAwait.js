//Asyn n await

//cas1 . async function return a promise with fullullied

/*async function f1()
{
   console.log("this is an async function")
   return 42;
}

f1().then((resolved)=>
{
    console.log("It is resolved", resolved)

})


case 2: - async function with a rejected promise

async function f2()
{
   console.log("this is an async function")
   throw new error("Error Displayed");
   
}

f2().catch(error=>
{
    console.log("It is an error", error)

})*/


//case 3:
// async function with a resolved/rejected promise:

function getInfo() {

    return new Promise((resolve, reject) => {

        const randomNumber = Math.random();

        setTimeout(() => {

            if (randomNumber < 0.5) {
                resolve(randomNumber);
            } else {
                reject(new Error("wrong value error"));
            }

        }, 2000);

    });
}

// create async function which is calling getInfo()

async function getNumberInfo() {

    try{
    const result = await getInfo(); //async step

    console.log("Result: ", result);
    }
    catch(error){
  console.log("Error", error)
    }

}



getNumberInfo()//calling  a function