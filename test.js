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
var message = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("message:" + message);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores " + sum);
