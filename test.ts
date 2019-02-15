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
console.log(typeof num);      //
