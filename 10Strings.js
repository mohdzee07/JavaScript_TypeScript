let day ='tuesday ';
console.log(day.length); // This will return the length of the string, which is 
///slice is used to get a substring
let subday =day.slice(0,3);
console.log(subday); // This will return the substring from index 0 to index 3, which is "tue"

//to get the last 3 characters of the string
let last3char = day.slice(-3);
console.log(last3char); // This will return the last 3 characters of the string, which is "day"     


//break a string by using slpit method

let slpitday =day.split("s");
console.log(slpitday);
console.log(slpitday[1]); // This will return the length of the first part of the string after splitting by "s", which is 4 (including the space)
//console.log(slpitday[1].trim().length); // This will return the length of the second part of the string after splitting by "s", which is 4 (including the space) 



//COnvert string integers into number susing pasreInt

let num1 = "12";
let num2 = "13";    

let diff = parseInt(num1) - parseInt(num2);
console.log(diff); // This will return the difference between the two numbers, which is -1
