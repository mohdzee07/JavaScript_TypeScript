    const k=10;

    for(let i=1; i<=k; i++){
    
        if(i%2==0){
            console.log(i); // Prints the even numbers or multiples of 2
        }
    }

    console.log("This is for loop to print the multiples of 5");
    // to print the mulitples of 2 and 5

    for(let i=1; i<=k; i++){
        if(i%2==0 || i%5==0){
            console.log(i); // Prints the even numbers or multiples of 2 and 5
        }
}

//nested if condition
console.log("This is nested if condition");

let n =0;

for(let i=1; i<=100; i++){
    if(i%2==0 && i%5==0)
    {
          console.log(i); // Prints the even numbers or multiples of 2 and 5
          n++;
          if(n==3)
          {
            break; // This will exit the loop after printing the first 3 multiples of 2 and 5
          }
    }
    
        
    }