let cartDiv = document.querySelector(".cartDiv");
let priceDiv = document.querySelector(".priceDiv");
let obj = JSON.parse(localStorage.obj1);
console.log(obj);
let val = Object.keys(obj).length;
let arr = JSON.parse(localStorage.dataArr);
console.log(arr);
if (val) {
  let label = document.createElement("div");
  label.textContent = "Item List";
  label.className = "fw-semibold p-3 fs-4 color1 border-bottom";
  cartDiv.appendChild(label);
  let arr1 = [];
  arr.map((ele) => {
    if (obj.hasOwnProperty(`${ele.id}`)) {
      ele.quantity = obj[ele.id];
      arr1.push(ele);
    }
  });
  console.log(arr1);
  arr1.map((ele) => {
    let parentDataDiv = document.createElement("div");
    parentDataDiv.className = "row row-cols-3 gx-1 my-3 childDiv";
    let childDataDiv = `<div class="h-100 divImg p-3">
    <img class="eleImg"  src="${ele.image}"/>
    </div>
    <div class="fs-6 fw-semibold d-flex flex-wrap align-content-center justify-content-start">
    ${ele.title}
    </div>
    <div class=" d-flex flex-column justify-content-center">
    <div class=" d-flex justify-content-around">
    <button class="btn btn-primary">-</button>
    <span class="border border-dark fw-bold" style="padding:5px 10px" text-black>${ele.quantity}</span>
    <button class="btn btn-primary">+</button>
    </div>
    <div class=" text-center fs-5 fw-semibold mt-3">
    <div>${ele.quantity}*$${ele.price}</div>
    </div>
    </div>`;
    parentDataDiv.innerHTML = childDataDiv;
    cartDiv.appendChild(parentDataDiv);
    let hr = document.createElement("hr");
    hr.className = "mx-5";
    cartDiv.appendChild(hr);
  });
} else {
  cartDiv.textContent = "Data Not Found";
}
