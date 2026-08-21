//1.Find unique elements in array
const array = [1,2,3,1,3,1,5]
const unique = [...new Set(array)]//Set always givve unique elements from an array
console.log(unique)


//2 convert into to string:
const num = 32;
const numstr = num + '' //-convert int to string
console.log(numstr+10)
//or
const num1 = String(num)
console.log(num1+10)

//3float to int

const float = 13.33
const num2 = parseInt(float)
console.log(num2)

//4.check if a variable is a number:
const value = 12;
if(typeof value === 'number' &&  !isNaN(value))
{
    console.log(value, + "Is a number")
}
else{
    console.log("Not a no")
}


//5. Swap var values
let a= 5;
let b=10;
[a,b] = [b,a]
console.log(a)
console.log(b)

//Check if obj has a specific property
const person =
{
    name: 'John',
    age :  25
}
if(person.hasOwnProperty("age"))
{
    console.log('Perrson has  name property')
}


//7Remove falsy values from an array :sunh as  (flase, o, undefined, null, NaN)

let arr1 = [1,0,NaN,undefined,null,8,7,9]
let finalvalue = arr1.filter(Boolean)
console.log(finalvalue)


//9. check if array conatins a specific value or not

const lang = ["java","Pw"]
if(lang.includes("java"))
{
    console.log("value is present")
}

//10. Chekc if array is empty

let empty =[]
if(empty.length === 0)
{
    console.log("array is empty")
}

//10Generate  a random number

const min =20;
const max =32;
const randonNuber = Math.random(min,max)
console.log(randonNuber)

//11.String to number
const strnumber = "32";
const x1 = parseFloat(strnumber)
console.log(x1)

//12. Join array elements in an array
const words = ["Heelo","Zee"]
const sentence = words.join("Bye");//joins i n the middle of an array
console.log(sentence)

//13. Clone an array
const marks=  [10,20,30,40]
const marksduplicate =[...marks]
console.log(marksduplicate)

//14. Object property
const user ={
    name :'Tom',
    age  : 22,
    dob: '01-01-2021'
}

console.log(user.name)
console.log(user['dob'])
const userduplicate = { ...user }; //spread operator
console.log(userduplicate)

//15. clone  an array

const assz = [10,20,30]
const duplicateassz = [...assz]
console.log(duplicateassz)

//16. Convert obj to array

const employee ={
    name :'Tom',
    age  : 22,
    dob: '01-01-2021'

}
//const emp = [...employee]// We cant use spread operator for objects
//console.log(emp)
//a.keys  array
const keysarray = Object.keys(employee);
console.log(keysarray)

//Value array
const valuearray = Object.values(employee)
console.log(valuearray)

//Get both keys and value of an object created

const keyvaluearray1 = Object.entries(employee)
console.log(keyvaluearray1)


//17. get current date n time

const currentdate = new Date();
console.log(currentdate)
console.log(currentdate.toLocaleString())

//18 truncate an array
const testing = [10,20,30,40,50]
testing.length =3;//it meanms it ewill hold first 3 values
console.log(testing)

//19 Last item in an array
const final = [10,20,30,40];
const arre= final.slice(-1)
console.log(arre)