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
console.log(typeof num); //output: number
//while loop
var n = 5;
while (n > 5) {
    console.log("Entered while");
}
do {
    console.log("Entered do_while");
} while (n > 5);
//break Statement
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5 between 1 and 10 is : " + i);
        break; //exit the loop if the first multiple is fond
    }
    i++;
} //ouputs 5 and exits the loop
//continue Statement
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log("The count of odd values between 0 and 20 is: " + count);
//Optional Parameters function
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
//Rest Parameters
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3, 4);
addNumbers(10, 10, 10, 10, 10);
//Default Parameters
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//Anonymous Function
var massage = function () {
    return "hello world";
};
console.log(massage());
//Anonymous function with parameters
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//The Function Constructor
var myFunction = new Function("a", "b", "return a * b");
var mul = myFunction(4, 3);
console.log(mul);
//Recursion and TypeScript Functions
function facotrial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * facotrial(number - 1));
    }
}
;
console.log(facotrial(6));
//Lambda Expression
//The function returns the sum of 10 and the argument passed.
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //outputs 110
//Lambda statement
var number = function (x) {
    x = 10 + x;
    console.log(x);
};
number(100);
//Syntactic Variations
// Parameter type Inference
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");
