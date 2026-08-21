//Method Overriding : Same method is created with same namd and same parmaters or args 

class car
{
    
    constructor(name,price)
    {
        this.name = name
        this.price = price
    }

    startrngine()
    {
        console.log("start the engine bro")
    }

    startrngine()//Method overriding- same mthod is overrided
    {
       console.log("start the engine bro for secodn time")
    }


}

const c1 = new car("Zen",1000)
c1.startrngine()