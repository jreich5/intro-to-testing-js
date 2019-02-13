// helloWorld function 
var helloWorld = function() {
    return "Hello, World!";
};

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!"
    } else if (input.length === 0) {
        return "Hello, Stranger!";
    } else {
        return "Hello, " + input + "!";
    }
}