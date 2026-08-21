var a=4;
console.log(a);

console.log(typeof((a)));

//string
let name="solventum";
console.log(name);
console.log(typeof(name));

//boolean
let isActive=true;
console.log(isActive);
console.log(typeof(isActive));

//We cannot redeclare let keyword with the same name
//let a=5; // This will throw an error

1.//We can use var keyword to redeclare the same variable
var a=5;
console.log(a);

2.//we can use let keyword to reassign the value of a variable
name = "solventum technologies";
console.log(name);


//reverse boolean value

console.log(!isActive);


//Const Keywrod
//const and let are block scoped, while var is function scoped. This means that variables declared with const and let are only accessible within the block they are defined in, while variables declared with var are accessible throughout the entire function.

//const keyword is used to declare a variable that cannot be reassigned. Once a value is assigned to a const variable, it cannot be changed. However, if the const variable holds an object or an array, the properties of that object or the elements of that array can still be modified.
 const z=10;
console.log(z);
  
z=20; // This will throw an error because we cannot reassign a const variable
console.log(z);