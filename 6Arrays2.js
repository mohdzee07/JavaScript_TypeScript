//map
//creat a new array with even numbers and muliply iby 3
var num =[1,2,3,4,5,6];

let evnmun =  num.filter(score=>score%2==0)
console.log(evnmun); // This will return a new array with true for even numbers and false for odd numbers, which is [false, true, false, true, false, true]

//map is used to create a new array by applying a function to each element of the original array

let mulipleevenno = evnmun.map(score2=>score2*3)
console.log(mulipleevenno); // This will return a new array with the even numbers multiplied by 3, which is [6, 12, 18]


//sum up the new arryas

let sumevenarray = mulipleevenno.reduce((sum1,score1)=>sum1+score1,0)
console.log(sumevenarray); // This will return the sum of all elements in the new array, which is 36