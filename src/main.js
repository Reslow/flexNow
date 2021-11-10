import "./style.css";
const counter = document.querySelector("#counter");
const counterElement = counter.firstElementChild;

document.getElementById("add").addEventListener("click", () => {
  const num = Number(counterElement.textContent) + 1;
  counterElement.innerText = num;
  updateLocalStorage(num);
  color(num);
});

document.getElementById("sub")?.addEventListener("click", () => {
  const num = Number(counterElement.textContent) - 1;
  counterElement.innerText = num;
  updateLocalStorage(num);
  color(num);
});

const color = (num) => {
  if (num < 0) {
    document.body.style.backgroundColor = "#f1713f";
  } else {
    document.body.style.backgroundColor = "#4f8a4f";
  }
};

const updateLocalStorage = (value) => {
  window.localStorage.setItem("time", value);
};

const init = () => {
  const timeValue = window.localStorage.getItem("time");
  counterElement.innerText = timeValue;
};

init();
