//block of code that performs a specific task is called function

function add(a,b)
{
 return a-b;

}

let sum = add(12,13)
console.log(sum);

//Do not have name => Anyonymus function  -- Function exp

let sumOfintegers = function(c,d)
{
    return c+d;
}

//Anonymous function is a function that does not have a name. It is also called a function expression. It is used when we want to create a function and use it immediately. It is also used when we want to create a function and assign it to a variable. It is also used when we want to create a function and pass it as an argument to another function.

let sumOfnumbers = (c,d)=>c+d // This a arrowe function(Fat pipe)
let sum = sumOfnumbers(12,13);
console.log(sum);

