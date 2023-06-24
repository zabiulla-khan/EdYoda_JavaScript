console.log();


// var userName = prompt("Enter Your Name");
// console.log(userName);

// var movie = {
//     name: "Master",
//     actor: "Thalapathy Vijay",
//     releaseYear: 2021,
//     durationInMin: 150,
//     wonOscar: true
// };

// var movie = new Object();
// movie.name = "Bat Man";
// movie.releaseYear = "2005";

var movie = Object.create(null);
movie.name = "Bat Man";
movie.releaseYear = 2005;
// delete(movie.name);
console.log(movie);


// Three types of creating Objects:(Object is a non-premitive data type);
// var movie = {};
// var movie = new Object();
// var movie = Object.create(null); 

var num1 = 125.256;
console.log(num1);

console.log(num1.toFixed());

console.log(Math.sqrt(num1));

console.log(Math.abs(-125.5));  // or modulus (changind negative to positive value);

console.log(Math.cos(45));

console.log(Math.pow(2,3));  // or power of
console.log(2**3);


//ARRAYS:

var userNames = ["Jane","John","Alex","Peter"];
console.log(userNames);

var prices = [120,220,330,440,550];
console.log(prices);

//to find the element in the index;
var users = ["Iron Man","Spider Man","Wanda","Vision","Thanos"];
console.log(users[0]);  // to access the index in array;
console.log(users[5]);  // to access the index in array;

//.length()
console.log(users.length); //to find length of the array;

console.log(users);

//.push()
users.push("Hulk");    //to add an element in the end of the array;
users.push("Ant Man"); //to add an element in the end of the array;
console.log(users);

//(.pop)
users.pop();           //to delete an element in the end of the array;
console.log(users);

//.shift()
users.shift();         //to delete an element in the start or 1st part of the array;
console.log(users);

//.unshift()                     
users.unshift("Doctor Strange"); //to add an element in the start or 1st part of the array;
console.log(users);

//.splice(index no , delete count , new item)
users.splice(2,1);     //to delete an element at specific place in the array;
console.log(users);

users.splice(1,2);     //to delete an element at specific place in the array;
console.log(users);

users.splice(2,0,"loki"); //to add an element at specific place in the array;
console.log(users);

users.splice(0,0,"Master"); //to add an element at specific place in the array;
console.log(users);

users.splice(3,1,"Groot"); //to replace an element at specific place  (or) removes an element and adds new element at a specific place in the array;
console.log(users);        

users.splice(1,2,"Mersal","Sarkar"); //to replace multiple elements at a specific place at once in the array;
console.log(users);

users.splice(2,0,"Black Widow","War Machine"); //to add multiple elements at a specific place without deleting any elements at once in the array;
console.log(users);

//Mutation - changing of an element ;
//All the above methods mutates the array;

//.slice()
var temp = users.slice(2,5);
console.log(temp); //(or) console.log(users.slice(2,5));
//slice method does not mutates the array 
//it shows the specific elements alone (or) highlighted (or) as sub-string


// Joining 2 arrays
var users2 = ["Bat Man","Aqua Man","Joker"];
var temp2 = users.concat(users2);
console.log(temp2);


//sorting an array - arrange an array in alphabetical order;
temp2.sort();
console.log(temp2); //console.log(temp2.sort())

temp2.reverse();    // arrange an array in reverse order after sorting the array;
console.log(temp2);


var temp3 = temp2.includes("Mersal"); // searches the element, if it is there it gives true, if it is not there it gives false;
console.log(temp3);

var temp4 = temp2.indexOf("Mersal"); // to find the index of the element;
console.log(temp4);

console.log(temp2.indexOf("Thor")); // searches the element if it not there it gives -1;