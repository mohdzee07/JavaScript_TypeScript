//1.name function
function add(a,b)
{
    return a + b ;
}

console.log(add(5,10));

//2. Function expression : Anonymous function *IMP*
const multiply = function (a,b)
{
    return a * b;
}
console.log(multiply(5,10));

//3. Arrow function

const divide = (t1,t2) => { return t1/t2; };
console.log(divide(5,10));

//4. Function constructor
const substrat = new Function('a', 'b' , 'return a-b;');
console.log(substrat(5,10));

console.log("**********");
//5 IIFE (Immediately Invoked Function Expression)
(function()
{
    console.log("IIFE function");
})();//--->here using () to call the function immediately after defining it

//6 Genertor function
function* generatorFunction()
{
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Anonymous function-function with no name

const number = [1,2,3,4,5];

const squarenumbers = number.map((num)=>num*num); // here we are using anonymous function as a callback function in map method

console.log(squarenumbers);

//8 recursive function - function calling itself
function factorial(n)
{


    if (n === 0 || n === 1)
    {
        return 1;
    }

    else{

       return n * factorial(n-1);
    }
}
 console.log(factorial(5));

 //9 high ordefr ucntion - function that takes another function as an argument or returns a function as a result

 function add(a,b)
 {
    return a+b;
 }

 function operate(funcname ,a,b)
 {
    return  funcname(a,b);
 }

 console.log(operate(add,5,10));