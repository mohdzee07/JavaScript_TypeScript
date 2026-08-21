productprices = [100, 200, 300, 400, 500];

//map method is used to create a new array by applying a function to each element of the original array

let discountedprices = productprices.map(dprice=>dprice-10%dprice);

console.log(discountedprices); // This will return a new array with the discounted prices, which is [1, 2, 3, 4, 5]

//filter

let affordableproducts = productprices.filter(price=>price<400);
console.log(affordableproducts); // This will return a new array with the affordable products, which is [100, 200, 300]

//reduce

let totalcost = affordableproducts.reduce((sum,total)=>sum+total,0);
console.log(totalcost); // This will return the total cost of the affordable products, which is 600