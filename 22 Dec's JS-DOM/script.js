console.log();

//DOM - Document Object Model;
//Document = HTML page;

console.log(document);

//find / search;
//getElementById();

var heading = document.getElementById("sub-heading");
console.log(heading);

var card = document.getElementById("sample-card");
console.log(card);

var card = document.getElementById("abcd");
console.log(card);

//getElementByClassName;

var paraArticle = document.getElementsByClassName("paragraph-article");
console.log(paraArticle);

var paraArticle = document.getElementsByClassName("paragraph-article");
console.log(paraArticle[0]); //to select specific item in a list using index;

var cardClass = document.getElementsByClassName("card");
console.log(cardClass);

var cardClass = document.getElementsByClassName("");
console.log(cardClass);

//getElementsByTagName;

var div = document.getElementsByTagName("div");
console.log(div);

var p = document.getElementsByTagName("p");
console.log(p);

var article = document.getElementsByTagName("article");
console.log(article);

var header = document.getElementsByTagName("header");
if (header.length === 0) {
  alert("No header element found!");
}
console.log(header);

//querySelector;

var pInArticle = document.querySelector(".my-article p");
console.log(pInArticle);

var allPInArticle = document.querySelectorAll(".my-article p");
console.log(allPInArticle);

var allPInArticle = document.querySelectorAll(".my-article > p");
console.log(allPInArticle);

//updating elements;

var heading = document.getElementById("sub-heading");
heading.innerText = "Sample Heading of Article - updated heading ABC";
setTimeout(function () {
  heading.innerText = "Lorem Ipsum";
}, 5 * 1000);

var image = document.getElementById("cardImg");
setTimeout(function () {
  if (image) {
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6saz6OGyTvH5ZhHHYdi--qphBUDgqND-pGvjTxv84fA&s";
    image.alt = "car";
  }
}, 5 * 1000);

var card = document.getElementById("sample-card");
setTimeout(function () {
  card.innerHTML = "<span>Test Span here</span> <div>ABCD</div>";
}, 7 * 1000);


//setInterval = which repeats for a particular time period;

var timer = document.getElementById('timer');
var counter = 60;
var interval = setInterval(function() {
    if (counter === 0) {
        alert("Happy New Year");
        clearInterval(interval); //stops the execution;
    }
    timer.innerText = counter;
    counter--;
}, 1000);


