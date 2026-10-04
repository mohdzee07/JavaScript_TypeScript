function secondlargest(arr)
{
    //[10,20,15,5]

// Initial:
// largest = 10
// secondLargest = 10

// Iteration 1:
// 20 > 10
// largest = 20
// secondLargest = 10

// Iteration 2:
// 15 is not greater than largest (20)
// 15 is greater than secondLargest (10)
// secondLargest = 15

// Iteration 3:
// 5 is smaller than both largest and secondLargest
// No changes

// Final Answer:
// largest = 20
// secondLargest = 15


    let largest =  arr[0]
    let seclargest  = arr[0]

    for (let i=1; i <= arr.length ; i++)
    {

   
        if( arr[i] > largest)
        {
            largest = arr[i]
            seclargest = largest // second largest(Infinity)
        }

        else if ( arr[i] > seclargest && arr[i] !== largest)
        {
            seclargest = arr[i]
        }
    }
     return seclargest
}

console.log(secondlargest([5,10,15,20]))