//1. Static varibales and methods are created using statiuc method
//2. the var and mthods can be acceesed using only class name e.e.g classname.var, classname.method()
//3. we can caccess static class and variables without creatiung an object of the class
//4. static methods and variibales belongs to class


class Car
{
   
    static wheels=4;

    constructor(name, price, color)
    {
        this.name = name
        this.price = price
        this.color = color
        this.wheels = 4;// not  agood practise
    }

    static engineon()
    {
        console.log("Engine started")
    }

}

const c1 = new Car("zen", 10000 , "red")
console.log(`${c1.name}`)
console.log(Car.wheels) ///static methods should be called using class name
Car.engineon(); // static mehods are accessible only using class name and not the object we create