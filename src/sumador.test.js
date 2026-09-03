import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
it("deberia devolver Love-Love porque ningun jugador ha anotado puntos aun", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love-Love");
  });

