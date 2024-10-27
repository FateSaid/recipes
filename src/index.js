import "./style.css";
import Pizza from "../src/pizza.jpg";
import Lasagna from "../src/lasagna.jpg";
import FishnChip from "../src/fish&chips.jpg";

function render() {
  createImage(Pizza, "pizza");
  createImage(Lasagna, "lasagna");
  createImage(FishnChip, "fishnChip");
}

function createImage(icon, string) {
  const recipe = document.querySelector(".recipe");
  const createDiv = document.createElement("div");
  createDiv.classList.add(string);
  createDiv.classList.add("box");
  const myImage = new Image();
  myImage.src = icon;
  myImage.setAttribute("alt", string);
  createDiv.textContent = string;
  createDiv.appendChild(myImage);
  recipe.appendChild(createDiv);
}

function eventHandler() {
  const box = document.querySelectorAll(".box");
  box.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.textContent);
    });
  });
}

render();
eventHandler();
