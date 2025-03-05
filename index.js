let productDiv = document.querySelector(".productDiv");
let homeBtn = document.querySelector(".homeBtn");
let productBtn = document.querySelector(".productBtn");
let allBtn = document.querySelector(".allBtn");
let mBtn = document.querySelector(".mBtn");
let wBtn = document.querySelector(".wBtn");
let jBtn = document.querySelector(".jBtn");
let eBtn = document.querySelector(".eBtn");
let detail = document.querySelector(".detail");
let cart = document.querySelector(".cart");
let prod = document.querySelector(".prod");
let aboutBtn = document.querySelector(".aboutBtn");
let prod1 = document.querySelector(".prod1");
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
function productList(arr1) {
  //Make a function for adding the item in a row according to the array condition.
  let rowDiv = document.createElement("div");
  rowDiv.className = "row row-cols-3 g-4 mt-1 row1 justify-content-center";
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
              <a  class="prod text-white detail btn btn-dark" id="${ele.id}" target="_self">Details</a>
              <button class="btn btn-dark addBtn" id="${ele.id}">Add to Cart</button>
            </div>
          </div>`;
    colDiv.innerHTML = col;
    rowDiv.appendChild(colDiv);
    i++;
  });
  productDiv.appendChild(rowDiv);
}

homeBtn.addEventListener("click", () => {
  getProduct();
});

allBtn.addEventListener("click", () => {
  productDiv.removeChild(productDiv.firstElementChild);
  productList(arr);
});

mBtn.addEventListener("click", () => {
  productDiv.removeChild(productDiv.firstElementChild);
  let arr2 = arr.filter((ele, i) => {
    if (ele.category == "men's clothing") {
      return ele;
    }
  });
  productList(arr2);
});

wBtn.addEventListener("click", () => {
  productDiv.removeChild(productDiv.firstElementChild);
  let arr2 = arr.filter((ele, i) => {
    if (ele.category == "women's clothing") {
      return ele;
    }
  });
  productList(arr2);
});

jBtn.addEventListener("click", () => {
  productDiv.removeChild(productDiv.firstElementChild);
  let arr2 = arr.filter((ele, i) => {
    if (ele.category == "jewelery") {
      return ele;
    }
  });
  productList(arr2);
});

eBtn.addEventListener("click", () => {
  productDiv.removeChild(productDiv.firstElementChild);
  let arr2 = arr.filter((ele, i) => {
    if (ele.category == "electronics") {
      return ele;
    }
  });
  productList(arr2);
});
// Object.keys(JSON.parse(localStorage.obj1)).length
let value;
let obj;
if (localStorage.obj1) {
  obj = JSON.parse(localStorage.obj1);
  value = Object.keys(JSON.parse(localStorage.obj1)).length;
} else {
  obj = {};
  value = 0;
}
cart.textContent = `Cart(${value})`;
let detailhandeler = async (e) => {
  let res = await fetch(`https://fakestoreapi.com/products/${e.target.id}`);
  let data = await res.json();
  if (e.target.textContent == "Details") {
    e.target.href = "./detail.html";
    localStorage.setItem("category", `${data.category}`);
    localStorage.setItem("title", `${data.title}`);
    localStorage.setItem("rate", `${data.rating.rate}`);
    localStorage.setItem("price", `${data.price}`);
    localStorage.setItem("description", `${data.description}`);
    localStorage.setItem("image", `${data.image}`);
    localStorage.setItem("id", `${data.id}`);
    localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
  }
  if (e.target.textContent == "Add to Cart") {
    let a = data.id;
    if (Object.hasOwn(obj, `${a}`)) {
      obj[a]++;
      value = value;
    } else {
      obj[a] = 1;
      value++;
    }
    cart.textContent = `Cart(${value})`;
  }
};
productDiv.addEventListener("click", detailhandeler);

productBtn.addEventListener("click", () => {
  productBtn.href = "./product.html";
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
prod.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});

aboutBtn.addEventListener("click", () => {
  localStorage.setItem("value1", `${value}`);
});
prod1.addEventListener("click", () => {
  localStorage.setItem("value1", `${value}`);
});
cart.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
  localStorage.setItem("dataArr", `${JSON.stringify(arr)}`);
});
