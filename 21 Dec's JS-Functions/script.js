console.log();


//Functions:
//syntax:
//function <function-name> (argument1 = default value1, arg2 = default val2, arg3 = default val3 {
//function body
//return value;
//}

function sum(num1 = 1 ,num2 = 1){
    var add = num1+num2;
    return add;
}

var result = sum(5,7);
console.log(result);

var temp = sum(10,90);
console.log(temp);

var res = sum();
console.log(res);

//write a program to calculate the new amount after SI given p=10000, r=7%, t=2.5years.

// newAmount=SI+principle;
// SI = (p*r*t)/100;

function totalAmount(principle = 1, rate = 1, time = 1){
    if (!principle || !rate || !time){
        alert("principle, rate, time, is required");
        return;
    }
    var si=(principle * rate * time) / 100;
    var newAmount = principle + si;
    return newAmount;
}

var temp2 = totalAmount(10000,7,2.5);
console.log(temp2);

var res2 = totalAmount();
console.log(res2);

// if want to take input from user,then the method is;

// var p = Number(prompt("Enter the principle"));
// var r = Number(prompt("Enter the rate of interest"));
// var t = Number(prompt("Enter the time period"));

// var temp3 = totalAmount(p,r,t);
// // console.log(temp3);


function greetUser(userName = 'there') {
    var greeting = 'Hello '+ userName + " welcome to JS session";
    return greeting;
}

console.log(greetUser("Alex"));
console.log(greetUser());


//print hello john in the console after 5 seconds;
//setTimeout(callback function, time in milli seconds);

function greet(){
    console.log("Hello John");
}
setTimeout(greet, 5 * 1000); //Execute greet function after 5seconds

function greet1(){
    console.log("B");
}

setTimeout(greet1, 6 * 1000);
console.log("A");
console.log("C");



