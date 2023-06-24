console.log();

Question: 1;

var input = [1, 2, 3, 4, 5, 1, 3];
var num = Number(prompt("Enter the number"));
var positions = [];
for (index = 0; index < input.length; index++) {
  if (input[index] === num) {
    positions.push(index);
  }
}
if (positions.length === 0) {
  console.log(-1);
} else if (positions.length === 1) {
  console.log(positions[0]);
} else {
  console.log(positions);
}

Question: 2;

for (var i = 1; i <= 5; i++) {
  var num = "";
  for (var j = 5; j >= i; j--) {
    num = num + j;
  }
  console.log(num);
}

Question: 3;

var arr = [3, 2, 1, 4, 5, 45];

console.log("Unsorted Array", arr);

arr.sort((a, b) => a - b);

console.log("Sorted Array", arr);

Question: 4;

function isAnagram(str1, str2) {
  sorted1 = str1.split("").sort().join("");
  sorted2 = str2.split("").sort().join("");
  return sorted1 === sorted2;
}

console.log(isAnagram("LISTEN", "SILENT"));
console.log(isAnagram("HELLO", "JELLO"));

Question: 5;

var str = "Hello";

function reverseStr(str){
    let output = "";
    for(let i = str.length - 1; i>=0; i--){
        output = output + str[i];
    }
    return output;
}

console.log(reverseStr(str));
