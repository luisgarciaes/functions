function greet(){
    console.log('Hello');
}
greet();

function logGreeting(fn) {
    fn()
};
logGreeting(greet);