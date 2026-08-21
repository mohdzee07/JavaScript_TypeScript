    //var marks = Arrays(6);//holds 6 values

    var marks=  Array(20,40,35,12,30,45); //create object of an array along with thev values
    console.log(marks);

    //or use the below array along with declaration 

    var marks = [11,2,20,30,40,50];
    console.log(marks[3]); // This will print the value at index 3, which is 30

    //Since i used var i can alyter abn array by reassigning it to a new array
    marks[3]=100;
    console.log(marks); // This will print the updated value at index 3, which is 100
    console.log(marks.length); // This will print the length of the array, which is 6

    console.log("**push**"); //adds value at the end of an array
    //Push is used to add new value sto an array
    marks.push(60);
    console.log(marks); // This will print the updated array with the new value 60 added at the end


    console.log("*pop*");
    marks.pop(); // This will remove the last element from the array, which is 60
    console.log(marks); // This will print the updated array after removing the last element


    console.log("**unshift**");
    marks.unshift(5);
    console.log(marks); // This will print the updated array with the new value 5 added at the beginning

    console.log("**indexOf**");
    console.log(marks.indexOf(100)); // This will return the index of the first occurrence of the value 100 in the array, which is 3


    //to check if a value is present in the array or not
    console.log(marks.includes(50)); // This will return true if the value 100 is present in the array, otherwise it will return false

    //creating a subarray from main array
    console.log("**slice**");
    console.log(marks.slice(2,4)); // This will return a new array containing the elements from index 2 to index 4 


    //To print asll elements of an array using for loop
    console.log("**for loop**");

    for(let i=0; i<marks.length; i++){
        console.log(marks[i]); // This will print each element of the array one by one
    }


    //To sum up all the elements of an array
    console.log("**sum of all elements in an array**");
    var sum =0;
    for(let i=0; i<marks.length; i++){
        sum += marks[i];
    }
    console.log(sum); // This will print the sum of all elements in the array

//Reeduce filter map
console.log("**reduce**");

let total =marks.reduce((sum,mark)=>sum+mark,0); // This will return the sum of all elements in the array using reduce method

console.log(total); // This will print the total sum of all elements in the array

//Creta a new array with only the even numbers from the original array using filter method

var scores =[10,11,12,]
var evenscores=[]

for(let i=0; i<scores.length; i++){

    if(scores[i]%2==0){
        evenscores.push(scores[i]); // This will add the even numbers to the new array evenscores
        //console.log(scores[i]); // This will print the even numbers from the original array
    }
}
console.log(evenscores); // This will print the new array with only the even numbers from the original array

console.log("**filter**");
//insted of for and if loop use filter method to create a new array with only the even numbers from the original array

let newfilterevenscores = scores.filter(score=>score%2==0)
console.log(newfilterevenscores); // This will print the new array with only the even numbers from the original array

