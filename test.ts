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