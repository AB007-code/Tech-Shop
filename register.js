let cart = document.querySelector(".cart");
let value = localStorage.value1;
cart.textContent = `Cart(${value})`;
cart.addEventListener("click", () => {
  localStorage.setItem("obj1", `${JSON.stringify(obj)}`);
});
