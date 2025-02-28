let category = document.querySelector(".category");
let title = document.querySelector(".title");
let rate = document.querySelector(".rate");
let price = document.querySelector(".price");
let description = document.querySelector(".description");
let detaiImg = document.querySelector(".detaiImg");
category.textContent = `${localStorage.category.toUpperCase()}`;
title.textContent = `${localStorage.title}`;
rate.textContent = `${localStorage.rate} ★`;
price.textContent = `$${localStorage.price}`;
description.textContent = `${localStorage.description}`;
detaiImg.src = `${localStorage.image}`;

let array = [];
const getProduct1 = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  data.forEach((ele) => {
    if (localStorage.category == ele.category) {
      array.push(ele);
    }
  });
};
getProduct1();
console.log(array);
