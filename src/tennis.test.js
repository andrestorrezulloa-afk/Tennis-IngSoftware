import Tennis from "./Tennis.js";

describe("Tennis", () => {
  it("deberia tener 0 puntos para ambos jugadores porque el juego acaba de iniciar", () => {
    let tennis = new Tennis();
    expect(tennis.puntosP1).toEqual(0);
    expect(tennis.puntosP2).toEqual(0);
  });

  
});