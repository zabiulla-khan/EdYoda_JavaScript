var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

let container = document.getElementById("container");
console.log(container);
let leftContainer = document.createElement("div");

leftContainer.classList.add("leftContainer");

let leftContainerImage = document.createElement("img");
leftContainerImage.src = productData.preview;
leftContainerImage.classList.add("leftContainerImage");

leftContainer.append(leftContainerImage);
container.append(leftContainer);

let rightContainer = document.createElement("div");
rightContainer.classList.add("rightContainer");

let h1 = document.createElement("h1");
h1.innerText = productData.name;

let brand = document.createElement("p");
brand.innerText = productData.brand;

let price = document.createElement("p");
price.innerText = "price: Rs ";
let priceSpan = document.createElement("span");
priceSpan.innerText = productData.price;
price.append(priceSpan);

let description = document.createElement("p");
description.innerText = "Description";

let descriptionText = document.createElement("p");
descriptionText.classList.add("para");
descriptionText.innerText = productData.description;

let productPreview = document.createElement("p");
productPreview.innerText = "Product Preview";

let smallContainer = document.createElement("div");
smallContainer.classList.add("smallContainer");

function onImgClick(e) {
  let clicked = e.target.src;
  let activeElement = document.getElementsByClassName("active");
  activeElement[0].classList.remove("active");
  e.target.classList.add("active");
  leftContainerImage.src = clicked;
}

for (i = 0; i < productData.photos.length; i++) {
  let photos = productData.photos[i];
  let smallImages = document.createElement("img");
  smallImages.classList.add("smallImages");
  smallImages.src = photos;
  smallImages.addEventListener("click", onImgClick);
  smallContainer.append(smallImages);
  if (i === 0) {
    smallImages.classList.add("active");
  }
}

let button = document.createElement("button");
button.classList.add("button");
button.innerText = "Add to Cart";

rightContainer.append(
  h1,
  brand,
  price,
  description,
  descriptionText,
  productPreview,
  smallContainer,
  button
);
container.append(rightContainer);
