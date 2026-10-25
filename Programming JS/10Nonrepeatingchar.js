function nonrepeating(str)
{
      // Step 1: Count how many times each character appears

      let count ={}
      for(let i=0 ;i<str.length ; i++)
      {
         let char =str[i]
         if(count[char])
         {
            count[char]++
         }
         else{
            count[char] =1;
         }
      }
        // Step 2: Find the first character whose count is 1

        for(let i=0 ;i<str.length ; i++)
        {
            if(count(str[i]) === 1)
            {
                return str[i]
            }
        }

        return null;
}

console.log(nonrepeating("swiss"))