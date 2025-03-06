let cartDiv = document.querySelector(".cartDiv");
let priceDiv = document.querySelector(".priceDiv");
let cart = document.querySelector(".cart");
let prod = document.querySelector(".prod");
let productBtn = document.querySelector(".productBtn");
let aboutBtn = document.querySelector(".aboutBtn");
let contactBtn = document.querySelector(".contactBtn");
let loginBtn = document.querySelector(".loginBtn");
let registerBtn = document.querySelector(".registerBtn");
let sectionDiv = document.querySelector(".sectionDiv");
let obj = JSON.parse(localStorage.obj1);
console.log(obj);
let val = Object.keys(obj).length;
let arr = JSON.parse(localStorage.dataArr);
cart.textContent = `Cart(${val})`;

let arr1 = [];
let total = 0;
let shipCost = 30;
if (val) {
  let label = document.createElement("div");
  label.textContent = "Item List";
  label.className = "fw-semibold p-3 fs-4 color1 border-bottom";
  cartDiv.appendChild(label);
  //for priceDiv
  let label1 = document.createElement("div");
  label1.textContent = "Order Summary";
  label1.className = "fw-semibold p-3 fs-4 color1 border-bottom";
  priceDiv.appendChild(label1);
  let proDiv = document.createElement("div");
  let shipDiv = proDiv.cloneNode();
  let totalDiv = proDiv.cloneNode();
  proDiv.className = "row row-cols-2 gx-1 fs-5 p-2 mt-3";
  shipDiv.className = "row row-cols-2 gx-1 fs-5 p-2";
  totalDiv.className = "row row-cols-2 gx-1 fs-5 p-2";

  arr.map((ele) => {
    if (obj.hasOwnProperty(`${ele.id}`)) {
      ele.quantity = obj[ele.id];
      arr1.push(ele);
      total += ele.quantity * ele.price;
    }
  });
  console.log(arr1);
  arr1.map((ele) => {
    let mainDiv = document.createElement("div");
    mainDiv.className = "container1";
    let parentDataDiv = document.createElement("div");
    parentDataDiv.className = `row row-cols-3 gx-1 my-3 childDiv`;
    parentDataDiv.id = `${ele.id}`;
    let childDataDiv = `<div class="h-100 divImg p-3">
    <img class="eleImg"  src="${ele.image}"/>
    </div>
    <div class="fs-6 fw-semibold d-flex flex-wrap align-content-center justify-content-start">
    ${ele.title}
    </div>
    <div class=" d-flex flex-column justify-content-center">
    <div class=" d-flex justify-content-around">
    <button class="btn btn-primary negativeBtn">-</button>
    <span class="border border-dark quan fw-bold" style="padding:5px 10px" text-black>${ele.quantity}</span>
    <button class="btn btn-primary positiveBtn">+</button>
    </div>
    <div class="text-start cartMargin fs-5 fw-semibold mt-3">
    <div>${ele.quantity}*$${ele.price}</div>
    </div>
    </div>`;
    parentDataDiv.innerHTML = childDataDiv;
    mainDiv.appendChild(parentDataDiv);
    cartDiv.appendChild(mainDiv);
    let hr = document.createElement("hr");
    hr.className = "mx-4 hr";
    mainDiv.appendChild(hr);
  });
  // for Product div
  let proDiv1 = `<div>Product (${val})</div>
  <div class="text-end">$${Math.floor(total)}</div>`;
  proDiv.innerHTML = proDiv1;
  priceDiv.appendChild(proDiv);
  /////////////////////
  // for Shiiping div
  let shipDiv1 = `<div>Shipping</div>
  <div class="text-end">$${shipCost}</div>`;
  shipDiv.innerHTML = shipDiv1;
  priceDiv.appendChild(shipDiv);
  ///////////////////
  //for Total Price div
  let totalPrice = total + shipCost;
  let totalDiv1 = `<div class="fw-bold">Total Price</div>
  <div class="text-end fw-bold">$${Math.floor(totalPrice)}</div>`;
  totalDiv.innerHTML = totalDiv1;
  priceDiv.appendChild(totalDiv);
  ////////////////////
  let btnDiv = document.createElement("div");
  btnDiv.className = "text-center mb-3 mt-3";
  let btn = `<button class="btn btn-dark py-2 fs-5 px-5">Go to checkout</button>`;
  btnDiv.innerHTML = btn;
  priceDiv.appendChild(btnDiv);
} else {
  // cartDiv.textContent = "Data Not Found";
  sectionDiv.textContent = "Cart is empty";
  sectionDiv.style.border = "none";
  sectionDiv.className = "fs-3 text-center text-danger";
}

console.log(total);
console.log(priceDiv.children[3].children[1]);
cartDiv.addEventListener("click", (e) => {
  if (e.target.textContent == "+") {
    let rowEleId1 = e.target.closest(".childDiv").id;
    if (obj.hasOwnProperty(`${rowEleId1}`)) {
      obj[rowEleId1]++;
      let price;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].id == rowEleId1) {
          price = arr1[i].price;
          console.log(arr1[i].price);
          total += price;
        }
      }

      priceDiv.children[1].children[1].textContent = `$${Math.floor(total)}`;
      priceDiv.children[3].children[1].textContent = `$${Math.floor(
        total + shipCost
      )}`;
      e.target.parentElement.parentElement.children[1].children[0].textContent = `${obj[rowEleId1]}*$${price}`;

      e.target.parentElement.children[1].textContent = `${obj[rowEleId1]}`;
    }
    console.log(obj);
  } else if (e.target.textContent == "-") {
    let rowEleId = e.target.closest(".childDiv").id;
    if (obj.hasOwnProperty(`${rowEleId}`)) {
      obj[rowEleId]--;
      let price;
      for (let i = 0; i < arr1.length; i++) {
        console.log(rowEleId);
        if (arr1[i].id == rowEleId) {
          price = arr1[i].price;
          console.log(arr1[i].price);
          total -= price;
        }
      }
      priceDiv.children[1].children[1].textContent = `$${Math.floor(total)}`;
      priceDiv.children[3].children[1].textContent = `$${Math.floor(
        total + shipCost
      )}`;

      e.target.parentElement.parentElement.children[1].children[0].textContent = `${obj[rowEleId]}*$${price}`;

      e.target.parentElement.children[1].textContent = `${obj[rowEleId]}`;
      if (obj[rowEleId] == 0) {
        e.target.closest(".container1").remove();
        delete obj[rowEleId];
        priceDiv.children[1].children[0].textContent = `Product (${
          Object.keys(obj).length
        })`;
      }
      cart.textContent = `Cart(${Object.keys(obj).length})`;
    }
  }
  if (!Object.keys(obj).length) {
    sectionDiv.textContent = "Cart is empty";
    sectionDiv.style.border = "none";
    sectionDiv.className = "fs-3 text-center text-danger";
  }
});

cart.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
prod.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
productBtn.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
aboutBtn.addEventListener("click", () => {
  localStorage.setItem("value1", `${Object.keys(obj).length}`);
});
contactBtn.addEventListener("click", () => {
  localStorage.setItem("value1", `${Object.keys(obj).length}`);
});
loginBtn.addEventListener("click", () => {
  localStorage.setItem("value1", `${Object.keys(obj).length}`);
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
registerBtn.addEventListener("click", () => {
  localStorage.setItem("value1", `${Object.keys(obj).length}`);
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
