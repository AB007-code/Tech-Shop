let row1 = document.querySelector(".row1");
let homeBtn = document.querySelector(".homeBtn");
let productBtn = document.querySelector(".productBtn");
let allBtn = document.querySelector(".allBtn");
let mBtn = document.querySelector(".mBtn");
let wBtn = document.querySelector(".wBtn");
let jBtn = document.querySelector(".jBtn");
let eBtn = document.querySelector(".eBtn");
let arr = [];
const getProduct = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  productList(data);
  data.forEach((ele) => {
    arr.push(ele);
  });
};
getProduct();
console.log(arr);
function productList(arr1) {
  //Make a function for adding the item in a row according to the array condition.
  let i = 0;
  arr1.map((ele) => {
    let x = ele.title.slice(0, 12);
    let y = ele.description.slice(0, 120);
    let colDiv = document.createElement("div");
    colDiv.className = "col-4 cold";
    let col = `<div class="itembox border rounded">
            <div class="imgDiv">
              <img src="${ele.image}" class="img" height="280px" width="80%" />
            </div>
            <div><h4 class="brandName">${x}...</h4></div>
            <div class="dscrptnDiv">${y}</div>
            <div class="border-top border-bottom py-1 fs-3 priceDiv">$ ${ele.price}</div>
            <div class="p-1">
              <button class="btn btn-dark">Details</button>
              <button class="btn btn-dark">Add to Cart</button>
            </div>
          </div>`;
    colDiv.innerHTML = col;
    row1.appendChild(colDiv);
    i++;
  });
}

homeBtn.addEventListener("click", () => {
  getProduct();
});

allBtn.addEventListener("click", () => {
  let list1 = document.querySelectorAll(".cold");
  list1.forEach((ele) => {
    row1.removeChild(ele);
  });
  productList(arr);
});
mBtn.addEventListener("click", () => {
  let list1 = document.querySelectorAll(".cold");
  let arr2 = arr.filter((ele, i) => {
    if (ele.category == "men's clothing") {
      return ele;
    } else {
      row1.removeChild(list1[i]);
    }
  });
  productList(arr2);
});
// productBtn.addEventListener("click", () => {});
