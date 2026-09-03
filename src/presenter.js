import Tennis from "./Tennis.js";

const juego = new Tennis();

// Seleccionamos los elementos del DOM
const puntuacion = document.querySelector("#puntuacion");
const buttonFirst = document.querySelector("#primer-jugador");
const buttonSecond = document.querySelector("#segundo-jugador");

// Evento para el Jugador 1
buttonFirst.addEventListener("click", () => {
  juego.anotarP1();
  puntuacion.textContent = juego.obtenerScore();
});

// Evento para el Jugador 2
buttonSecond.addEventListener("click", () => {
  juego.anotarP2();
  puntuacion.textContent = juego.obtenerScore();
});