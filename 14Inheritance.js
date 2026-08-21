const Person = require("./13ClasinJs");

//Inheritance
require('./13ClasinJs') // This will import the Person class from another file using require() function
class Pet extends Person{

//Overriding the parent class method in child class
    get location()
    {
        return "Bluecross"
    }

//mandatory to create a constructor in child class if  parent has a constructor otherwise it will give an error because the child class will not be able to access the properties of the parent class without a constructor in the child class      
    constructor(fname,lname)
    {
         //call parent class constructor
         super(fname,lname) // This will call the constructor of the parent class Person and pass the fname and lname parameters to it, which will initialize the firstname and lastname properties of the Pet class with the values passed from the constructor of the Pet class

    }

}


 let pet1=new Pet("Tom","Jerry")
 console.log(pet1.fullname()); // This will call the fullname method of the parent class Person and print the full name of the pet, which is "Tom Jerry"
 //console.log(pet1.age); 
 console.log(pet1.location); // This will call the location getter method of the child class Pet and print the location of the pet, which is "Bluecross"