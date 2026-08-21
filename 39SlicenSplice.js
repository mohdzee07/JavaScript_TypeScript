//slice() is used to extract elements from an array without changing the original array.
//array.slice(startIndex, endIndex)
//endindex will not be inculded but it will be stopped there

let s1 ="zeshan"



//zeeshan
//0123456
//-7-6-5-4-3-2-1


//Syntax: [startindex,endindex]
console.log(s1.slice(1,3))

console.log(s1.slice(-3))//only -3 will take from reverse order

console.log(s1.slice(1,-2))//1 represent start index and -1 represent the last start index and stops at n-1


//splice() is used to:

//Remove elements
//Insert elements
//Replace elements

//array.splice(startIndex, deleteCount, item1, item2...)

//Remove elemets
    //   0,  1, 2, 3,4 
let a1 =[10,20,30,40,50];
console.log(a1.indexOf(10))
a1.splice(1,2)
console.log(a1)//10 40,50

//Insert elements
//2--> is the index at whihc we want to add--
//0->deleting any array element
//31,32 are elements to be added in array
let a2 =[10,20,30,40,50];
a2.splice(2,0,31,32)
console.log(a2)


//Replace elements
let arr = [10,20,30,40];
arr.splice(1,2,100,200);//It means start at index 1 and delete 2 items and the insert 100,200
console.log(arr);