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