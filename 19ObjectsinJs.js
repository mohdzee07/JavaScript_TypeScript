//We can create object withour a calss and without a constructor

//1.Object literals {}---****IMP********** most commony used
const user = {

    name: 'zeeshan',
    age: '35',
    occupation: 'engg'
}

console.log(user.name)
//we cadd an object outside the block as well
user.dob = 12;
console.log(user.dob)

//2. Construnctor function: We pass argumets in the car as a constructor does
//creting an object using cosntructor

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const c1 = new Car("BMW", "520d", 10000)
console.log(c1.brand)


//3 Class style:
//creating an object using class
class Customer {

    constructor(name, product) {
        this.name = name;
        this.product = product;
    }
    addprodcut() {
        console.log(`${this.name} is a beautiful ${this.product}`)
    }


}


console.log("*************")

const c2 = new Customer('apple', 'mango')
console.log(c2.name);
console.log(c2.product)
c2.addprodcut()

//4 Object.create() : with some prototype object

const employeeProject =
{
    printInfo: function () {
        console.log(`My name is name ${this.name}`)
    }
}
const e1 = Object.create(employeeProject)
e1.name = 'Zeeshan'
e1.printInfo()

//5 using factoryfunction: returns and object

function createDepartment(deptnanme, HOD) {
    return {

        deptnanme: deptnanme,
        HOD: HOD,

        getdeptdetails: function () {
            console.log(`${this.deptnanme} HOD is ${this.HOD}`)
        }
    }
}

const dept1 = new createDepartment("Physics", "Zeeshan")
dept1.getdeptdetails();
