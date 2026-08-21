module.exports = class Person //this is used to export the class Person so that it can be imported in other files using require() function
{
   age=25;
  get location()
  {
    return "canada"
  }

  //constuctor is amethod excudets by default when we crerate object of a clsaa

  constructor(fname,lname)  //default constructor
  {
       this.firstname = fname;
       this.lastname = lname;
  }


  fullname()
  {
    console.log(this.firstname + this.lastname); // This will print the full name of the person, which is "Zee shan"
  }

}

/*let person = new Person("Zee","shan") //passing the variables from constructor
console.log(person.age);
console.log(person.location);
console.log(person.fullname()); // This will call the fullname method of the person object and print the full name, which is "Zee shan"
*/