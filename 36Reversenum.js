function revernum(num)
{
  if(num>=0 && num<=9)
    { 
        return num;
    }

let revnum =0;
while(num!=0)
{
   revnum = revnum * 10 + (num%10) // 0 *10 + (123%10) =3 // 3*10 + (12/10)= 32 // 32*10 +(1%10) =321
   num = Math.floor(num/10)//123/10-- since we are unsing math.floor it will take outanuthing ater "." it will give 12//12/10-->1.2 ".2" is removed and gives 1 //1/10-->0.1 it gives 0
}

return revnum
}

console.log(revernum(123))
