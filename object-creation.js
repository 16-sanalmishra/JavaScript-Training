var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function () {
      return 'Hi ' + this.firstname;
    },
  };
  
  var john = Object.create(person);
  console.log(john);
  john.firstname = 'John';
  console.log(john.greet());