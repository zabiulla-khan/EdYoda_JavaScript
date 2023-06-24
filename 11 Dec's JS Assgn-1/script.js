console.log()


Question: 1;

var str1 = "Today is";
var str2 = "      a beautiful day     ";
var str3 = " In Hawaii.     ";

var result = str1 + " " + str2.trim() + " " + str3.trim();

console.log(result);

Question: 2;

var enteredAlphabet = "A";

switch (enteredAlphabet) {
  case "a":
    output = "vowel";
  case "e":
    output = "vowel";
  case "i":
    output = "vowel";
  case "o":
    output = "vowel";
  case "u":
    output = "vowel";
  case "A":
    output = "vowel";
  case "E":
    output = "vowel";
  case "I":
    output = "vowel";
  case "O":
    output = "vowel";
  case "U":
    output = "vowel";
    break;
  case "b":
    output = "consonant";
  case "c":
    output = "consonant";
  case "d":
    output = "consonant";
  case "f":
    output = "consonant";
  case "g":
    output = "consonant";
  case "h":
    output = "consonant";
  case "j":
    output = "consonant";
  case "k":
    output = "consonant";
  case "l":
    output = "consonant";
  case "m":
    output = "consonant";
  case "n":
    output = "consonant";
  case "p":
    output = "consonant";
  case "q":
    output = "consonant";
  case "r":
    output = "consonant";
  case "s":
    output = "consonant";
  case "t":
    output = "consonant";
  case "v":
    output = "consonant";
  case "w":
    output = "consonant";
  case "x":
    output = "consonant";
  case "y":
    output = "consonant";
  case "z":
    output = "consonant";
  case "B":
    output = "consonant";
  case "C":
    output = "consonant";
  case "D":
    output = "consonant";
  case "F":
    output = "consonant";
  case "G":
    output = "consonant";
  case "H":
    output = "consonant";
  case "J":
    output = "consonant";
  case "K":
    output = "consonant";
  case "L":
    output = "consonant";
  case "M":
    output = "consonant";
  case "N":
    output = "consonant";
  case "P":
    output = "consonant";
  case "Q":
    output = "consonant";
  case "R":
    output = "consonant";
  case "S":
    output = "consonant";
  case "T":
    output = "consonant";
  case "V":
    output = "consonant";
  case "W":
    output = "consonant";
  case "X":
    output = "consonant";
  case "Y":
    output = "consonant";
  case "Z":
    output = "consonant";
    break;
  default:
    output = "non-alphabet";
}
console.log(output);

Question: 3;
var num1 = Number(prompt("Enter 1st Operand"));

var Operators = prompt("Enter the Operator =>(+,-,*,/)");

var num2 = Number(prompt("Enter 2nd Operand"));

switch (Operators) {
  case "+":
    output = num1 + num2;
    break;
  case "-":
    output = num1 - num2;
    break;
  case "*":
    output = num1 * num2;
    break;
  case "/":
    output = num1 / num2;
    break;
  default:
    output = "Invalid Input";
}
console.log(output);

Question: 4;

var a = prompt("enter the length of a");
var b = prompt("enter the length of b");
var c = prompt("enter the length of c");

if (a == b && b == c) {
  console.log("Equilateral Triangle");
} else if (a == b || b == c || c == a) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Traingle");
}

Question: 5;

var electricityConsumed = Number(prompt("enter the no of  units consumed"));

if (electricityConsumed <= 50) {
  electricityBill = electricityConsumed * 0.5;
} else if (electricityConsumed <= 150) {
  electricityBill = 25 + (electricityConsumed - 50) * 0.75;
} else if (electricityConsumed <= 250) {
  electricityBill = 100 + (electricityConsumed - 150) * 1.2;
} else {
  electricityBill =
    220 +
    (electricityConsumed - 250) * 1.5 +
    (220 + (electricityConsumed - 250) * 1.5) * 0.2;
}

console.log(electricityBill);
