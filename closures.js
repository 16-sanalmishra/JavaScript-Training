function g(message){
    return function h(name){
        console.log(message + " " + name);
    }
}
// g("Say Hii")("Sanal");
var s = g("Say Hi");
s("Sanal");