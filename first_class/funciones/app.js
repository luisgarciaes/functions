function greet(){
    console.log('Hello');
}
greet();

function logGreeting(fn) {
    fn()
};
logGreeting(greet);

let greetMe=function() {
    console.log('Hola desde la expresion de función')
};
greetMe();