console.log();

// Loop - Repetition;
//Types of Loops;
// 1.While Loop,
// 2.For Loop;

// 3 things required to run a loop;
// Initialization,Condition,Tncrement/Decrement;


//While Loop Syntax;
// Initialization
//while(condition) {
// Todo : write the code you want to repeat;
// Increment/decrement;
//}

var counter = 1; //initialization;

while(counter <=100) {
    console.log('I Love my family');//console.log('I Love my family',counter)
                                    // to print counter no along with ToDo 
    counter++;  
}

console.log('---------------------------------------------------');

var counter = 1;
var table = 81;
while(counter <=10){
    console.log(table+' x '+counter+' = '+table*counter);
    counter++;
}

console.log('---------------------------------------------------');

var users = ["Undertaker",
'Batista',
'John Cena',
'Ray Mysterio',
'Roman Reigns',
'The Rock',
'Jindal Mahal',
'Big Show',
'The Great Khali',
];

var counter = 0;
while(counter < users.length) {
    console.log('Hello '+users[counter]);
    counter++;
}

console.log('---------------------------------------------------');

//For Loop Syntax;
//for(Initialization;Condition;Increment/Decrement){
       //ToDo : write what you nrrd to repeat;
//};
var table = 78;
for (var counter = 1; counter <= 10;counter++) {
console.log(table+' x '+counter+' = '+table*counter)
};

console.log('---------------------------------------------------');

for (var counter=100;counter>0;counter--){
    console.log(counter);
}

console.log('---------------------------------------------------');

//break;
//continue;

for (var i=1;i<10; i++){
    if(i===7){break;} // stops at the specified place;
    console.log(i);
}

console.log('---------------------------------------------------');

for (var i=1;i<10; i++){
    if(i===7){continue;} // skips at the specified place;
    console.log(i);
}

console.log('---------------------------------------------------');

// to print even numbers from 1 to 100;

for (var counter=1;counter<=100;counter++) {
    if (counter%2 === 0){
    console.log(counter);
    }
}

console.log('---------------------------------------------------');

// to print odd numbers from 1 to 100;

for (var counter=1;counter<=100;counter++) {
    if (counter%2 === 1){
    console.log(counter);
    }
}

console.log('---------------------------------------------------');


// to print prime numbers from 1 to 100;

for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}