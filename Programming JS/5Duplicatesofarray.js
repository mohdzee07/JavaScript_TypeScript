
//this program prints duplicates from an array
function  duplicate(arr)
{
      let dup=[];

      for (let i =0; i<arr.length; i++)
      {
        for(let j= i+1 ; j<arr.length; j++)
        {
            if(arr[i] === arr[j] && !dup.includes(arr[i]))//!dup.includes(arr[i]) Makes sure the same duplicate isn't added twice
            {
                dup.push(arr[i])//Adds the duplicate to the result
            }
        }
      }
      return dup;
}

console.log(duplicate([10,20,30,40,20,10]))