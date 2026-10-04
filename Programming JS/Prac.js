function freq(str)
{

    let freqq= {};

    for (let i = 0; i<=str.length ; i++)
    {
           if(freqq[str[i]])
           {
             freqq[str[i]]++;
           }
           else{
              freqq[str[i]] = 1;
           }
    }

     return freqq;
    
}

console.log(freq("banana"))