let greet = () =>{
    console.log('Hello');
}
greet();

let logGreeting = (fn) => {
    fn()
};

logGreeting(greet);

let greetMe = () => {
    console.log('Hola desde la expresion de función')
};
greetMe();

logGreeting(greetMe);