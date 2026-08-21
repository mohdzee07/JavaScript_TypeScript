

//note: when we have single parameter we can skip the parenthesis and when we
// have single statement we can skip the return keyword and curly braces
//num is a single parameter and num*num is a single statement so we can skip the parenthesis and 
// return keyword and curly braces
//IMP: when we use {} in arrow fucntionn return is mandatory

//1.arrow funcion with single parameter and single statement
const squareofnumbers = num => num * num;
console.log(squareofnumbers(5));

//2. arrow function with no paprameter and single statement

const message = () => "Hello World";
console.log(message());


//3. arrow function with multiple parameters and single statement

const addnumbers = (a,b,c) => a+b+c;
console.log(addnumbers(5,10,15));


//4.Arrow function used in an object method

const person ={
     firstname: "John",
     secondname: "Doe",
}

//here we can remove parathesis and return keyword and curly braces because we have single parameter and single statement
const getFullName = person => `${person.firstname} ${person.secondname}`;
console.log(getFullName(person));

//5 default parameters in arrow function

const car = (modal='2006', color='red') => `the car with modal ${modal}! i purchased is ${color} in color`;
//when calling default parameters we can skip parameters and it will take default values
//example: car() will take default values of modal and color
console.log(car());

//we can override the default parameters by passing values to the function
const g1 = car('2020','black');
console.log(g1);

//************VERYIMPO*********/

//6 rest parameters in arrow function (...)
// here we are using reduce method to sum all the numbers in the array
//...numbers islike an array that acceots multiple parameters
//acc is the accumulator that stores the sum of all the numbers in the array
//0 is the initial value of the accumulator
const sum = (...numbers)=> numbers.reduce((acc,num)=> acc + num,0); 
//in the sum i can pass any number of parameters and it will sum all the numbers because ... act like an array
console.log(sum(1,2,3,4,5));



//7 using default and rest parameters together in arrow function

//here browsername is a default parameter and ...version is a rest parameter
const browserDetails = (browsername='chrome',...version)=>
{
    console.log(browsername);
    console.log(version);
}

browserDetails(); // here we are not passing any parameters so it will take default parameter and rest parameter will be empty array
browserDetails('firefox','v1','v2','v3'); // here we are overriding the default parameter and passing multiple parameters to the rest parameter


//8 using math functions in arrow function

const findMaxValue = (a,b,c) => Math.max(a,b,c); // here we are using Math.max() function to find the maximum value among the three parameters

console.log(findMaxValue(10,20,30));