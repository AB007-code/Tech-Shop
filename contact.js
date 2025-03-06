let cart = document.querySelector(".cart");
let prd1 = document.querySelector(".prd1");
let value = localStorage.value1;
cart.textContent = `Cart(${value})`;
cart.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
  //   localStorage.setItem("dataArr", `${JSON.stringify(arr)}`);
});
prd1.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
