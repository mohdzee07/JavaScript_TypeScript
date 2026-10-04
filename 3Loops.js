
function chknumber(number)
{
    if(number>0)
    {
        console.log("no is +ve")
    }

    else if(number<0)
    {
        console.log("no is -ve")
    }
    else{
         console.log("No number")
}
}

chknumber(-1)
    console.log("This is while loop");
    let i =0;
    while(i<5){
        console.log(i);
        i++;
    }

    console.log("This is do while loop");
    //do while is used to execute the do loop at least once, even if the condition is false
    let j=10;
    do{
        console.log(j);
        j++;
    }while(j<5){
        console.log("This is do while loop");
    }