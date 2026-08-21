//1.every-->returns TRUE if all the elements in the array are true
//It return a boolean value

let num = [10,20,30,40]
let compare = num.every((e)=> e>=10)
console.log(compare)

//2. some-->atleast one lement should be true for the condition

let e1 = [1,2,3,4,5,6,7,8]
let c1 = e1.some(e =>(e%2 ===0))//2,4,6,8 are divisble by 2
console.log(c1)

//3. finds()->return the first (elememnt) that satisfies the given condition
//If it doent not find any elelemnt satisfyiung the condition it will return undefined
let number =[1,2,3,4,5,6]
let d1 = e1.find(e1 => e1%2 === 0)
console.log(d1)//2 

//4 lastIndexOf
let lastindex = ["app","bana","mango","app"]
let z1 = lastindex.lastIndexOf("app",0)
console.log(z1)