console.log();

//to insert new single or multiple elements in a div in  HTML;

//syntax: selectors.append(newElement1,newElement2,...)  for Multiple new elements inserting;
//syntax: selectors.appendchild(newElement) for single newElement inserting

var article = document.getElementById("article");

var paragraph = document.createElement("p");

paragraph.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil voluptatibus eum enim ad minus, accusantium maxime veritatis corporis optio natus ratione officia inventore eligendi ullam repellendus, quis eius error.";

var h2 = document.createElement("h2");

h2.innerText = "Sample Heading by JS";

// article.append(h2);
// article.append(paragraph);
article.append(h2, paragraph);

// to insert a new single element in body or anywhere;

var body = document.body;

var span = document.createElement("span");

span.innerText = "Hey there, this is created for test using JS";

body.appendChild(span);

// to insert a new element in HTML at a specifi place;

//syntax : insertBefore(newElementName,before which element you want to insert the newElement)
//

var envArticle = document.getElementById("envArticle");
console.log(envArticle.children.length);

var div = document.createElement("div");
div.innerText = "Test Values are added to a div using JS";

envArticle.insertBefore(div, envArticle.children[1]);

//updating the styles of an element;

envArticle.style.color = "red";
envArticle.style.fontSize = "40px";
envArticle.style.backgroundColor = "green";

//to change color for every 2seconds or any time period;
// 0 - white color;
// 255 - black color;
//syntax:
// console.log(parseInt(Math.random() * 255));

// var counter = 1;
// var interval = setInterval(function(){
//     if(counter>10){
//         clearInterval(interval);
//     }
//     var randomColorCode = parseInt(Math.random() * 255);
//     document.body.style.backgroundColor = `rgb(${randomColorCode},155,255)`;
//     counter++;
// },2000);

//to add and remove classes to an element;

//to add;
envArticle.classList.add("my-article");
envArticle.classList.add("testcls");

//to remove//;
envArticle.classList.remove("my-article");
envArticle.classList.remove("testcls");

//to delete an element from DOM;
envArticle.remove();




//-----------------------------------------------------


//Events: Any activity happening on the webpage is known as events;

function onButtonClick(){
    var randomColorCode = parseInt(Math.random() * 255);
        document.body.style.backgroundColor = `rgb(${randomColorCode},155,255)`;
}
// function onButtonClick2(){
//     console.log("clicked2");

// }

var btn = document.getElementById("btn");

//syntax: element.eventName = eventListener;

btn.onclick = onButtonClick; //this allows only one event listener for an event on an element;
// btn.onclick = onButtonClick2;

//syntax: element.addEventListener("eventName",eventListener);

// btn.addEventListener("click",onButtonClick); //this allows multiple event listeners for an event on an element;
// btn.addEventListener("click",onButtonClick2);

function onMouseEnter(){
    console.log("Enter");
    mouseExp.style.backgroundColor = "yellow";
}
function onMouseLeave(){
    console.log("leave")
    mouseExp.style.backgroundColor = "blue";
}

var mouseExp = document.getElementById("mouse-exp");
mouseExp.addEventListener("mouseenter",onMouseEnter);
mouseExp.addEventListener("mouseleave",onMouseLeave);