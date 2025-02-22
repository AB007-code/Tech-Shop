let img = document.querySelectorAll(".img");
let brandName = document.querySelectorAll(".brandName");
let dscrptnDiv = document.querySelectorAll(".dscrptnDiv");
let priceDiv = document.querySelectorAll(".priceDiv");
let homeBtn = document.querySelector(".homeBtn");
let productBtn = document.querySelector(".productBtn");
// let arr = [];
const getProduct = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  let i = 0;
  data.forEach((ele) => {
    let x = ele.title.slice(0, 12);
    let y = ele.description.slice(0, 120);
    img[i].src = `${ele.image}`;
    brandName[i].textContent = `${x}...`;
    dscrptnDiv[i].textContent = `${y}...`;
    priceDiv[i].textContent = `$ ${ele.price}`;
    i++;
  });
};
getProduct();
homeBtn.addEventListener("click", () => {
  getProduct();
});
// productBtn.addEventListener("click", () => {});
