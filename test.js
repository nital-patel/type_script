var message = "Hello World";
console.log(message);
var num = 12;
console.log(num);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
