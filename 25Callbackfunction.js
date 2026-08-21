// //1. callbackfunction-> function which is passed as  an argument in another function
// //2. It will be executed after a specific task that specific task is called with asyn function 
// //3. once asyn call/task is completed only then call back fucntion is executed


// //1.greet is a normal function and it has 2 parm one is name and other is a callbackfunction
// function greet(name, callback) {

//     console.log("my name is" + " " + name)
//     callback(); //-->this is a callback function whihc will get called once function greet is invoked

// }

// function callbackinvoke() {
//     console.log("Call back function invoked")
// }

// //when calling a metohod we pass 2 param one is name other is a callback function without ()
// greet("zee", callbackinvoke);

// console.log("asyn call back")
// //******VERY IMPORTANT************
//2. Callback with async fucntion
function printInfo(name, callback) {

    //setimout is async function which 
    setTimeout(function () {
        console.log("my name is" + " " + name),
            callback("Call me home")
    },
        10000)

}

//2nd method whihc is a callback method
function welcome(msg) {
    console.log("call back fucntion")
}

//calling the first method which has a callback method in it hnece we pass 2nd arg as a method with () bcuase it has an arg
printInfo("zee", welcome)

// //3 More ex

// function fetchUser(userid, callback) {


//     setTimeout(() => {

//         const users = {
//             1: { id: 1, name: "zeeshna" },
//             2: { id: 2, name: "mehu" }
//         }
//         const user = users[userid]
//         {
//             if (user) {
//                 callback(null, user)
//             }
//             else {
//                 callback("usernot found", null)
//             }
//         }



//     }, 2000);

// }

// function handleuserdata(error, user) {
//     if (error) {
//         console.error("error:", error)
//     }
//     else {
//         console.log("Valid user", user)
//     }
// }

// fetchUser(1, handleuserdata())


// function demo(demo,callback)
// {
//     setTimeout(()=>
//     {
//         console.log("print nw the timout")
//     },2000)

//     callback()

// }

// function invoke(msg)
// {
//     console.log("invoke msg")

// }

// demo("hi",invoke)

function fetchData(callback) {

    setTimeout(() => {
        console.log("Data received");

        callback();
    }, 2000);

    console.log("Fetching...");
}

fetchData(() => {
    console.log("Processing data");
});