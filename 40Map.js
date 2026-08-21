//Map will always return a new array with samo number of elements

let num =[2,3,4,5]
let a1 = num.map((e)=> e*e)
console.log(a1)

//2Using function

let f1 =[10,20,30,40]

function fun(f1)
{
    return f1*f1
}

const final = f1.map(fun)
console.log(final)