function Person(firstname, lastname, age) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    console.log('function person is invoked');
  }
  
  console.log(Person);
  
  var john = new Person('john', 'doe');
  console.log(john);
  
  var jane = new Person('Jane', 'Doe',32);
  console.log(jane);
  
  Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
  };

  Person.prototype.getValidPerson = function (age) {
    if(this.age > 20){
        return "Can Vote";
    }
    else{
        return "Cannot";
    }
  };
  
  console.log(john.getFullName());
  console.log(jane.getFullName());
  console.log(jane.getValidPerson());