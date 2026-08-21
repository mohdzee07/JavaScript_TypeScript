//Taking values out of an object or array and storing them into variables in a short and clean way.
// 
//Objects

const person ={
    name: "zee",
    age : 29
}

const {name,age} = person
console.log(person.name);
console.log(person.age);

//Arrays
const a1 = [1,2,3,4,5]

const [a,b,c,d] = a1

console.log(a)


//array with spread operator
const name1 = ["father","mother", "son", "life"]

const [p,q,...r] = name1
console.log(p);
console.log(...r);


//function destuture

function printfullname({fname,lname})
{
    console.log(fname + " " + lname)

}

const person1 ={
    fname :"zee",
    lname :"shan"
}

printfullname(person1)