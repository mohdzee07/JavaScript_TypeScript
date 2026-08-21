//.Split method

let s1 = "Java i like it Java"
let arr =  s1.split(" ")
console.log(arr[3])

//.Inculdes method

console.log(s1.includes("Java"))

//Replace and Replace all

console.log(s1.replace("Java", "Zee"))//Replace only one of the ocurenace

console.log(s1.replaceAll("Java", "Zee"))//Replace all replace all the occurance in string

//Trim
console.log(" Helo Zee!!  ".trim())
console.log('   Hello Zee '.trimStart())

//padend

console.log("Hell0".padEnd(8,"*"))
console.log("Hell0".padStart(8,"*"))

//starts with and end  with

console.log("Heeloo".startsWith(H));
console.log("Heeloo".endsWith(H));