class car{


    constructor(name,modal,price)
    {
        this.name = name,
        this.modal = modal,
        this.price = price
    }

    refuel()
    {
        console.log("Refuel the car"+ " " + this. name)
    }
}

//using new keyword to create object of class

const c1 = new car("zen", 2007, 18000)
console.log(c1.name)
c1.refuel()