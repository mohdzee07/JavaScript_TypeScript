    var scores1 = [12,13,14,15,16];

    let sumvalues = scores1.filter(num=>num%2==0).map(num1=>num1*3).reduce((sum,val)=>sum+val,0);

    console.log(sumvalues);

    //Mapping is used to get whole new array by applying some function on each element of the array. It is used to transform the data in the array. It does not change the original array. It returns a new array with the transformed values.
    //Filtering is used to get a new array by applying some condition on each element of the array. It is used to filter the data in the array. It does not change the original array. It returns a new array with the filtered values.
    //Reducing is used to get a single value by applying some function on each element of the array. It is used to reduce the data in the array. It does not change the original array. It returns a single value with the reduced values.

    //Sorint of an array

    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.sort();
    console.log(fruits);

    //Customised csorting
    var numbers= [12,003,19,76,45,23,89,34];
   

    numbers.sort((a,b)=>a-b)
    console.log(numbers);
    console.log(numbers.reverse());

    //other way of writing the same code but itr is complex

    numbers.sort(function(a,b){
        return a-b;
    })
    console.log(numbers);