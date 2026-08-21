//concat 2 strings and find ho mnay time "day" occurs

let day1 ="tuesday";

let day2 = "is a funday";

let concatstring =day1 + " " + day2;

console.log(concatstring); // This will return the concatenated string, which is "tuesdayis a funday"


let count =0;
let value = concatstring.indexOf("day");

while(value!=-1){
    count++
    value=  concatstring.indexOf("day",value+1);
}
console.log(count);     // This will return the number of times "day" occurs in the concatenated string, which is 2
