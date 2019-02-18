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
//Optional parentheses for a single parameter
var display = function (x) {
    console.log("The function got " + x);
};
display(12);
//Optional braces for a single statement, Empty parentheses for no parameter
var disp = function () {
    console.log("Function invoked");
};
disp();
function check(x, y) {
    console.log(x);
    console.log(y);
}
check(1, "abc");
check(1, "xyz");
//number proptey
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month);
}
else {
    console.log("value Accepted..");
}
//ex. prototype
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee 's name:  " + emp.name);
console.log("Employee 's Email ID: " + emp.email);
//array
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
//Single statement declaration and initialization
var nums = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
//Array Object
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
// Array Constructor accepts comma separated values
var names = new Array("Marry", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Array Destructuring
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
//Array Traversal using for…in loop
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
//Simple Tuple
var mytuple = [10, "Hello"]; //create a  tuple
console.log(mytuple[0]);
console.log(mytuple[1]);
//Empty Tuple
var tup = [];
tup[0] = 12;
tup[1] = 23;
console.log(tup[0]);
console.log(tup[1]);
//Tuple Operations
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size
mytuple.push(12); // append value to the tuple
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Items after pop " + mytuple.length);
//Destructuring a Tuple
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
