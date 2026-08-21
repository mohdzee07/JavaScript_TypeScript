    //object is collection of properties

const Person =  require('./13ClasinJs') // This will import the Person class from another file using require() function
    let person ={

        firstname:'Tim',
        lastName :'Smith',
        age :24,

        fullname :function()
        {
            console.log(this.firstname + " " + this.lastName); // This will print the full name of the person, which is "Tim Smith"         

        }
    }

    console.log(person.fullname()); // This will call the fullname method of the person object and print the full name, which is "Tim Smith"
    console.log(person); // This will print the entire person object, which is {firstname: 'Tim', lastName: 'Smith'}
    console.log(person.firstname); // This will print the value of the firstname property, which is "Tim"
    console.log(person.lastName); // This will print the value of the lastName property, which is "Smith"

    //Array notataion

    console.log(person['firstname']); // This will print the value of the firstname property, which is "Tim"
    console.log(person['lastName']); // This will print the value of the lastName property, which is "Smith"    ]

    person.firstname = "John";
    console.log(person.firstname); // This will print the updated value of the firstname property, which is "John"  
    person.gender ='male'
    console.log(person); // This will print the updated person object, which is {firstname: 'John', lastName: '
    delete person.gender
    console.log(person); // This will print the updated person object, which is {firstname: 'John', lastName: 'Smith'}


    //to chk if proerty is present in an object or not

    console.log('gender' in person); // This will return false because


    //enchnaced for loop- print all the value of JS objects

    for(let key1 in person){
        // This will print each key of the person object one by one, which are "firstname" and "lastName"
        console.log(person[key1]); // This will print the value of each key of the person object one by one, which are "John" and "Smith"
    }


    let person1= new Person("zee","shan")
    console.log(person1.fullname()); // This will print the value of the age property of the person1 object, which is 25