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
//variable scope
var global_num = 12; //global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable
    };
    Numbers.sval = 10; //static field
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable
var object = new Numbers();
console.log("Global num: " + object.num_val);
//negation operator(-)
var x = 4;
var y = -x;
console.log("value of x: ", x); //outputs 4
console.log("value of y: ", y); //outputs -4
//string operator: concatenation opreator (+)
var msg = " hello " + "world";
console.log(msg);
//Conditional Operator (?)
var num = 2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
//typeof operator
var num = 12;
console.log(typeof num); //
