
//Mutilple inheretica - is not allowed in js-- > child class extends more that one parent class
//Mutliple inheritance is allowed in JS --> e.eg child class extedning another child class

class Vehicle {
    constructor(name, modal, price) {
        this.name = name
        this.modal = modal
        this.price = price
    }

    getInfo() {
        return `${this.name}  modal is ${this.modal} and price is ${this.price}`
    }

    startengine() {
        console.log("Engine started...")
    }

}

class car extends Vehicle
{


    constructor(name, modal, price, fueltype) {
      
        super(name, modal, price) // here i am invoking the parent class contructor
        this.fueltype = fueltype
    }
    
    fueltye()
    {
        console.log("fuel is petrol")
    }

}

class Zen extends car{

    constructor(name, modal, price,fueltype,color) {
      
        super(name, modal, price,fueltype) // here i am invoking the parent class contructor
        this.color = color
    }

    colorcar()
    {
        console.log("car is red in color")
    }
}


const c1 = new Zen("Zen", 2200 , 100 , "petrol", "red")
c1.colorcar()
console.log(c1.getInfo())
c1.startengine();
c1.fueltye()