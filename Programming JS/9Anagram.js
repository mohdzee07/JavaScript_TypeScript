function isAnagram(str1,str2)
{

    //step1 : FInd i bot the strings are  of same length
    if(str1.length !== str2.length)
    {
       return false;
    }

    let count = {}

    //step 2: find fre of each char in str1
    for(let i =0; i<str1.length ;i++)
    {
            let ch = str1[i];
            if(count[ch])
            {
                count[ch]++;
            }
            else{
                count[ch]=1;
            }
    }


    //step 3: remove each char from string
       for(let i =0; i<str2.length ;i++)
       {
         let ch =str2[i]

         if(!count[ch])
         {
            return false
         }
         else{
            count[ch]--;
         }
       }

       return true;
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("race", "care"));     // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("aab", "abb"));       // false