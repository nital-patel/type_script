//simple hello world print
var message = "Hello World";
console.log(message);
//number print
var num = 12;
console.log(num);
//class create and void method use in print message
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
//var create and compile
var fullName = "John Alab";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("fullName:" + fullName);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores " + sum);
//type assertion
var str = '2';
var str2 = str;
console.log(str2);
