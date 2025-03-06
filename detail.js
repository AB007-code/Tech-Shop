let category = document.querySelector(".category");
let title = document.querySelector(".title");
let rate = document.querySelector(".rate");
let price = document.querySelector(".price");
let description = document.querySelector(".description");
let detaiImg = document.querySelector(".detaiImg");
let carousl = document.querySelector(".carousl");
let addBtn = document.querySelector(".addBtn");
let cart = document.querySelector(".cart");
let prod = document.querySelector(".prod");
let productBtn = document.querySelector(".productBtn");
let a = localStorage.id;
console.log(a);
category.textContent = `${localStorage.category.toUpperCase()}`;
title.textContent = `${localStorage.title}`;
rate.textContent = `${localStorage.rate} ★`;
price.textContent = `$${localStorage.price}`;
description.textContent = `${localStorage.description}`;
detaiImg.src = `${localStorage.image}`;
let row1 = document.createElement("div");
let array = [];
row1.style.height = "350px";
const getProduct1 = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  data.forEach((ele) => {
    if (localStorage.category == ele.category) {
      array.push(ele);
      let x = ele.title.slice(0, 15);
      let div1 = document.createElement("div");
      div1.className = `col p-2 text-center`;
      div1.innerHTML = `<div class="border h-100 d-flex flex-column justify-content-around rounded">
       <div class="divImg"><img src="${ele.image}" width="100%" height="100%"/></div>
       <div class="fw-semibold ">${x}...</div>
       <div class="border">
       <a class="btn btn-dark font text-white dBtn" id=${ele.id}  target="_parent">Details</a>
       <a class="btn btn-dark style="height:"50px" font text-white" href="./detail.html">Add to Cart</a>
       </div>
     </div>`;
      row1.appendChild(div1);
    }
  });
  row1.className = `row scrol gx-2 row-cols-${array.length}`;
  carousl.appendChild(row1);
};
getProduct1();
carousl.addEventListener("click", (e) => {
  array.forEach((ele) => {
    if (e.target.id == ele.id) {
      category.textContent = `${ele.category.toUpperCase()}`;
      title.textContent = `${ele.title}`;
      rate.textContent = `${ele.rating.rate} ★`;
      price.textContent = `$${ele.price}`;
      description.textContent = `${ele.description}`;
      detaiImg.src = `${ele.image}`;
    }
  });
});
let value;
let obj;
// console.log(Object.keys(JSON.parse(localStorage.obj1)).length);
console.log(JSON.parse(localStorage.obj1));
if (Object.keys(JSON.parse(localStorage.obj1)).length) {
  obj = JSON.parse(localStorage.obj1);
  value = Object.keys(JSON.parse(localStorage.obj1)).length;
} else {
  obj = {};
  value = 0;
}
cart.textContent = `Cart(${value})`;
let detailhandeler = () => {
  let a = localStorage.id;
  console.log(a);
  if (Object.hasOwn(obj, `${a}`)) {
    obj[a]++;
    value = value;
  } else {
    obj[a] = 1;
    value++;
  }
  cart.textContent = `Cart(${value})`;
};
addBtn.addEventListener("click", detailhandeler);
prod.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
productBtn.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
cart.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
