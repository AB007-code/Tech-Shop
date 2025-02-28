let category = document.querySelector(".category");
let title = document.querySelector(".title");
let rate = document.querySelector(".rate");
let price = document.querySelector(".price");
let description = document.querySelector(".description");
let detaiImg = document.querySelector(".detaiImg");
let carousl = document.querySelector(".carousl");
category.textContent = `${localStorage.category.toUpperCase()}`;
title.textContent = `${localStorage.title}`;
rate.textContent = `${localStorage.rate} ★`;
price.textContent = `$${localStorage.price}`;
description.textContent = `${localStorage.description}`;
detaiImg.src = `${localStorage.image}`;
let row1 = document.createElement("div");
row1.className = "row gx-2";
row1.style.height = "350px";
// let array = [];
const getProduct1 = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  data.forEach((ele) => {
    if (localStorage.category == ele.category) {
      //   array.push(ele);
      let x = ele.title.slice(0, 15);
      let div1 = document.createElement("div");
      div1.className = "col p-2 text-center";
      div1.innerHTML = `<div class="border h-100 d-flex flex-column justify-content-around rounded">
       <div class="divImg"><img src="${ele.image}" width="200px" height="100%"/></div>
       <div class="fw-semibold ">${x}...</div>
       <div>
       <a class="btn btn-dark text-white" href="./detail.html">Details</a>
       <a class="btn btn-dark text-white" href="./detail.html">Add to Cart</a>
       </div>
     </div>`;
      row1.appendChild(div1);
    }
  });
};
getProduct1();
carousl.appendChild(row1);
