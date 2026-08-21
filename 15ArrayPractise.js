var names = ["zee","afshan","farhan","shahbaz"];

console.log(names); // This will print the entire names array, which is ["zee", "afshan", "farhan", "shahbaz", "zeeshan", "afshan", "farhan", "shahbaz"]


//Add a new element at start of an array
names.unshift("Mehu"); // This will add the value "zeeshan" at the beginning of the names array 
console.log(names); // This will print the updated names array with the new value "zeeshan" added at the beginning, which is ["zeeshan", "zee", "afshan", "farhan", "shahbaz", "zeeshan", "afshan", "farhan", "shahbaz"]    


//removes the last element from an array
names.pop(); // This will remove the last element from the names array, which is "shahbaz"
console.log(names); // This will print the updated names array after removing the last element, which is ["zeeshan", "zee", "afshan", "farhan", "shahbaz", "zeeshan", "afshan", "farhan"]


//push a new element at the end of an array

names.push("sicko"); 
console.log(names); 

names.sort(); // This will sort the names array in alphabetical order
console.log(names); // This will print the sorted names array, which is ["afshan", "afshan", "farhan", "farhan", "shahbaz", "shahbaz", "zee", "zeeshan"]