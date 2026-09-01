export Tennis from "./Tennis.js";
const first = document.querySelector("#resultado-primer-jugador");
const second = document.querySelector("#resultado-segundo-jugador");
const buttonFirst = document.querySelector("#primer-jugador");
const buttonSecond = document.querySelector("#segundo-jugador");

buttonFirst.addEventListener("click", () => {
  const firstNValue = first.innerHTML === "" ? 15 : Number.parseInt(first.innerHTML.replace("<p>", "").replace("</p>", "")) + 15;
  first.innerHTML = "<p>" + firstNValue + "</p>";
});
buttonSecond.addEventListener("click", () => {
  const secondNValue = second.innerHTML === "" ? 15 : Number.parseInt(second.innerHTML.replace("<p>", "").replace("</p>", "")) + 15;
  second.innerHTML = "<p>" + secondNValue + "</p>";
});