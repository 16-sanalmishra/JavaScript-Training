var p = {
    fName:"Sanal",
    lName:"Mishra",

    address :{
        street:"Hindalco Colony"
    }
}
console.log(p);

function greet(person){
    console.log(`Hii ${person.fName}`);

}
greet(p)
console.log(greet.name);

function greet() {
    console.log('hi');
  }
  
  greet();
  
  console.log(greet);
  
  greet.language = 'espanol';
  console.log(greet);
  console.log(greet.language);