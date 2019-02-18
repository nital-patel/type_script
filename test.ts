//simple hello world print
var message:string = "Hello World";
console.log(message);

//number print
var num:number = 12;
console.log(num);

//class create and void method use in print message
class Greeting {
    greet():void {
        console.log("Hello World!!");
    }
}
var obj = new Greeting();
obj.greet();

//var create and compile
var fullName:string = "John Alab";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("fullName:" +fullName)
console.log("first score: "+score1)
console.log("second score: "+score2)
console.log("sum of the scores "+sum)

//type assertion
var str = '2';
var str2 = str;
console.log(str2);

//variable scope
var global_num = 12     //global variable
class Numbers {
    num_val = 13;       //class variable
    static sval = 10;   //static field

    storeNum():void {
        var local_num = 14;  //local variable
    }
}
console.log("Global num: "+global_num)
console.log(Numbers.sval)      //static variable
var object = new Numbers();
console.log("Global num: "+object.num_val)

//negation operator(-)
var x:number = 4
var y = -x;
console.log("value of x: ",x);      //outputs 4
console.log("value of y: ",y);      //outputs -4

//string operator: concatenation opreator (+)
var msg:string = " hello " + "world"
console.log(msg)


//Conditional Operator (?)
var num:number = 2
var result = num > 0 ?"positive":"non-positive"
console.log(result)


//typeof operator
var num = 12
console.log(typeof num);      //output: number

//while loop
var n:number = 5
while(n > 5) {
    console.log("Entered while")
}
do {
    console.log("Entered do_while")
}
while(n>5)


//break Statement
var i:number = 1
while(i<=10) {
    if (i%5 == 0) {
        console.log("The first multiple of 5 between 1 and 10 is : "+i)
        break                //exit the loop if the first multiple is fond
    }
i++
}                             //ouputs 5 and exits the loop

//continue Statement
var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
    if (num % 2==0) {
        continue
    }
    count ++
}
console.log("The count of odd values between 0 and 20 is: "+count)

//Optional Parameters function
function disp_details(id:number,name:string,mail_id?:string) {
    console.log("ID:", id);
    console.log("Name", name);

    if(mail_id!=undefined)
        console.log("Email Id",mail_id);
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");

//Rest Parameters
function addNumbers(...nums:number[]) {
    var i;
    var sum:number = 0;

    for(i=0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers",sum)
}
addNumbers(1,2,3,4)
addNumbers(10,10,10,10,10)

//Default Parameters
function calculate_discount(price:number,rate:number = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount: ",discount);
}
calculate_discount(1000)
calculate_discount(1000,0.30)

//Anonymous Function
var massage = function () {
    return "hello world";
}
console.log(massage())

//Anonymous function with parameters
var res = function (a:number,b:number) {
    return a*b;
};
console.log(res(12,2))

//The Function Constructor
var myFunction = new Function("a","b", "return a * b");
    var mul = myFunction(4,3);
console.log(mul);

//Recursion and TypeScript Functions
function facotrial(number) {
    if (number <= 0) {
        return 1;
    } else {
        return (number * facotrial(number - 1));
    }
};
    console.log(facotrial(6));

//Lambda Expression
//The function returns the sum of 10 and the argument passed.
var foo = (x:number)=>10 + x
console.log(foo(100))      //outputs 110

//Lambda statement
var number = (x:number)=> {
    x = 10 + x
    console.log(x)
}
number(100)

//Syntactic Variations
// Parameter type Inference
var func = (x)=> {
    if(typeof x=="number") {
        console.log(x+" is numeric")
    } else if(typeof x=="string") {
        console.log(x+" is a string")
    }
}
func(12)
func("Tom")

//Optional parentheses for a single parameter
var display = x=> {
    console.log("The function got "+x)
}
display(12)

//Optional braces for a single statement, Empty parentheses for no parameter
var disp =()=> {
    console.log("Function invoked");
}
disp();

//Function Overload
function check(s1:string):void;
function check(s1:string):void;
function check(n1:number,s1:string):void;

function check(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
check(1,"abc")
check(1,"xyz");

//number proptey
var month = 0
if( month<=0 || month > 12) {
    month = Number.NaN
    console.log("Month is "+ month)
} else {
    console.log("value Accepted..")
}

//ex. prototype
function employee(id:number,name:string) {
    this.id = id
    this.name = name
}
var emp = new employee(123,"Smith")
employee.prototype.email = "smith@abc.com"

console.log("Employee 's Id: "+emp.id)
console.log("Employee 's name:  "+emp.name)
console.log("Employee 's Email ID: "+emp.email)

//array
var alphas:string[];
alphas = ["1", "2", "3", "4"]
console.log(alphas[0]);
console.log(alphas[1]);

//Single statement declaration and initialization
var nums:number[] =[1,2,3,3]
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);


//Array Object
var arr_names:number[] = new Array(4)

for(var i = 0;i<arr_names.length;i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}

// Array Constructor accepts comma separated values
var names:string[] = new Array("Marry","Tom","Jack","Jill")

for(var i =0;i<names.length;i++) {
    console.log(names[i])

}

//Array Destructuring
var arr:number[] = [12,13]
var[x,y] = arr
console.log(x)
console.log(y)

//Array Traversal using for…in loop
var j:any;
var nums:number[] = [1001,1002,1003,1004]

for(j in nums) {
    console.log(nums[j])
}

//Simple Tuple
var mytuple = [10,"Hello"]; //create a  tuple
console.log(mytuple[0])
console.log(mytuple[1])

//Empty Tuple
var tup = []
tup[0] = 12
tup[1] = 23

console.log(tup[0])
console.log(tup[1])

//Tuple Operations
var mytuple = [10,"Hello","World","typeScript"];
console.log("Items before push "+mytuple.length)    // returns the tuple size

mytuple.push(12)                                    // append value to the tuple
console.log("Items after push "+mytuple.length)
console.log("Items before pop "+mytuple.length)
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item

console.log("Items after pop "+mytuple.length)

//Destructuring a Tuple
var a =[10,"hello"]
var [b,c] = a
console.log( b )
console.log( c )


//Union Type Variable
var val:string|number
val = 12
console.log("numeric value of val "+val)
val = "This is a string"
console.log("string value of val "+val)

//Union Type and function parameter
function test(name) {
    if (typeof name == "string") {
        console.log(name);
    } else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}

test("mark");
console.log("Printing names array....");
test(["Mark", "Tom", "Mary", "John"]);

//Union Type and Arrays
var array:number[]|string[];
var i:number;
array = [1,2,4]
console.log("**numeric array**")

for(i = 0;i<array.length;i++) {
    console.log(array[i])
}

array = ["Mumbai","Pune","Delhi"]
console.log("**string array**")

for(i = 0;i<array.length;i++) {
    console.log(array[i])
}

//Union Type and Array
var array:number[]|string[];
var i:number;
array = [1,2,4]
console.log("**numeric array**")

for(i = 0;i<array.length;i++) {
    console.log(array[i])
}

array = ["Mumbai","Pune","Delhi"]
console.log("**string array**")

for(i = 0;i<array.length;i++) {
    console.log(array[i])
}

//Interface and Objects
interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}

var customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi: ():string =>{return "Hi there"}
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var data:IPerson = {
    firstName:"Jim",
    lastName:"Blakes",
    sayHi: ():string =>{return "Hello!!!"}
}

console.log("Employee  Object ")
console.log(data.firstName);
console.log(data.lastName);

//Union Type and Interface
interface RunOptions {
    program:string;
    commandline:string[]|string|(()=>string);
}

//commandline as string
var options:RunOptions = {program:"test1",commandline:"Hello"};
console.log(options.commandline)

//commandline as a string array
options = {program:"test1",commandline:["Hello","World"]};
console.log(options.commandline[0]);
console.log(options.commandline[1]);

//commandline as a function expression
options = {program:"test1",commandline:()=>{return "**Hello World**";}};

var fn:any = options.commandline;
console.log(fn());

//Simple Interface Inheritance
interface Person {
    age:number
}

interface Musician extends Person {
    instrument:string
}

var drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Drums"
console.log("Age:  "+drummer.age); console.log("Instrument:  "+drummer.instrument)

//Multiple Interface Inheritance
interface IParent1 {
    v1:number
}

interface IParent2 {
    v2:number
}

interface Child extends IParent1, IParent2 { }
var Iobj:Child = { v1:12, v2:23}
console.log("value 1: "+this.v1+" value 2: "+this.v2)

//Accessing Attributes and Functions
class Car {
    //field
    engine:string;

    //constructor
    constructor(engine:string) {
        this.engine = engine
    }

    //function
    disp():void {
        console.log("Function displays Engine is  :   "+this.engine)
    }
}

//create an object
var car = new Car("XXSY1")

//access the field
console.log("Reading attribute value Engine as :  "+car.engine)

//access the function
car.disp()

//Class Inheritance
class Shape {
    Area:number

    constructor(a:number) {
        this.Area = a
    }
}

class Circle extends Shape {s
    display():void {
        console.log("Area of the circle:  "+this.Area)
    }
}

var shap = new Circle(223);
shap.display()


//Class inheritance and Method Overriding
class PrinterClass {
    doPrint(): void {
        console.log("doPrint() from Parent called…")
    }
}
class StringPrinter extends PrinterClass {
    doPrint():void {
        super.doPrint()
        console.log("doPrint() is printing a string…")
    }
}

var string = new StringPrinter()
string.doPrint()

//The static Keyword
class StaticMem {
    static num:number;

    static disp():void {
        console.log("The value of num is"+ StaticMem.num)
    }
}

StaticMem.num = 12     // initialize the static variable
StaticMem.disp()      // invoke the static method


