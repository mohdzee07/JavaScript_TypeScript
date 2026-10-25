function anagram(str1,str2)
{
    if(str1 !== str2)
    {
        return false;
    }

     let count ={}
    for( let i=0; i<str1.length ; i++)
{
    let ch = str1[i];
     
        if(count[ch])
        {
           count[ch]++;   
        }
        else{
             count[ch] =1;
        }
    }

    for( let j=0; j<=str2.length ;j++ )
    {
        let ch1=str2[j];

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

console.log(anagram('listen','silent'))