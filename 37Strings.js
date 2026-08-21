//1. Length of string 

let s1 = "zeeshan"

console.log(s1.length)
console.log(s1.charAt(3))
console.log(s1.charCodeAt(4)); //Providea the ascii vlaues of char a-z // 97-122

console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

//2. Slice method
//Z e e s h a n
//0 1 2 3 4 5 6
//-6 -5 -4 -3 -2 -1
//-1-2-3-4-5-6

//javascript
//0123456789
//-10-9-8-7-6-5-4-3-2-1
let s2 = "javascript" 
//In slice method : Start index, End index(End index wont take but it will just stop there)
console.log("%%%%%%slice$%%%%%%")
console.log(s2.slice(1,4))//this is means strat from 1 and end at 6-NOTE: it will stop at 6 and give values onlt unitl 5

//3.In Substring method ; 
console.log(s1.substring(2,6))//In subtrung it will strart at the index no 2 and ends at 6 but wont inlcude 6the index value

console.log(s1.substring(-2,4))//It means all -ve values will be converted to 0 s its prints "ze" 2 is the index to stop

//4. Split method

let c1  = "Java_Python_Playwright";
let arr = c1.split("_")
console.log(arr[0])


