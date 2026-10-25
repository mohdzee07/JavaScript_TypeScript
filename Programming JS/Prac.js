function sumofarray(arr, sum)
{
    let num =[18]

    for(let i=0;i<arr.length; i++)
    {
        for(let j= i+1 ; i<arr.length; j++)
        {
          if(arr[i]+arr[j] === sum)
          {
               return  [i,j]
          }
        }

    }
    return [];
}

console.log(sumofarray([1,2,7,11]),18)