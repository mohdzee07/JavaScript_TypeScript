///var - is global if declared outside a function and local if declared inside a function
///let - is block scoped and can be updated but not re-declared
///const - is block scoped and cannot be updated or re-declared 

//1:51
//var - global level/funtional level scope
//var can be redecalred`
var greet = "Hello World";
greet="good";

if(1==1)
{

    var greet = "Afternoon"; //here var is is still in gloaba leve
}

function add(a,b)
{
    var greet = "Good Morning";
    return a+b;
}

let sum = add(1,2);
console.log(sum);
console.log(greet);

//Let scope is in global lebel and block level
//let cannot be redecalred but can be updated
let greet1 ="Evening"

if(1==1)
{
    let greet1 ="Afternnonn" // here let is in block level scope
}

function add(a,b)
{
    let greet1 = "Good Morning";
    return a+b;
}

let sum1 = add(1,2);
console.log(sum1);
console.log(greet1);