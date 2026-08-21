//Reduce bring the whole array to a single value
//It will not retur the excat array but willl return a specific value

let num = [10,34,56,78,90]
//acc-->is the var tht holds final output
//num is pointing to each n every element of an array
//0 is in the inital value assigned to acc
let sum = num.reduce((acc,num)=> acc+num, 0)

console.log(sum)

//Find the max no of an array

let maxnum = [10,20,40,80]

let max1 = maxnum.reduce((acc,max)=>
{

  if(max>acc)
  {
    return max

}
else{
    return acc
}},maxnum[0])

console.log(max1)

//Find the min no of an array

let minnum1 = [20,90,40,80,12]

let max2 = minnum1.reduce((acc,curr)=> //acc=20, curr=90
{

  if(curr<acc )
  {
    return max

}
else{
    return acc
}})

console.log(max2)