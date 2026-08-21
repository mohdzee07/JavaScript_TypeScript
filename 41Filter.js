//Filter will return a new array 
//This is used to when we want to filter certain elements based on a condition 


let f1 =[1,2,3,4,5,6,7,8,9,10]
let f2 = f1.filter(e => e % 2 === 0)
console.log(f2)


//**************** */
//Case 2
let employee = [
  { name: "John",  age: 30, gender: "male" },
  { name: "Bob",   age: 35, gender: "male" },
  { name: "Lisa",  age: 40, gender: "female" },
  { name: "Priya", age: 25, gender: "female" },
  { name: "Peter", age: 55, gender: "male" }
];

let final = employee.filter((emp)=> {
    if(emp.gender === 'female' && emp.age>=25)
    {
        return emp.name
    }

})
console.log(final)