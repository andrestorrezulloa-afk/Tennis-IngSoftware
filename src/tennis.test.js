import Tennis from "./Tennis.js";

describe("Tennis", () => {
  it("deberia tener 0 puntos para ambos jugadores porque el juego acaba de iniciar", () => {
    let tennis = new Tennis();
    expect(tennis.puntosP1).toEqual(0);
    expect(tennis.puntosP2).toEqual(0);
  });
  it("deberia registrar 1 punto para el Jugador 1 porque anoto un punto", () => {
    let tennis = new Tennis();
    tennis.anotarP1();
    expect(tennis.puntosP1).toEqual(1);
  });

  it("deberia registrar 1 punto para el Jugador 2 porque anoto un punto", () => {
    let tennis = new Tennis();
    tennis.anotarP2();
    expect(tennis.puntosP2).toEqual(1);
  });
  it("deberia devolver Love-Love porque ningun jugador ha anotado puntos aun", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love-Love");
  });
  it("deberia devolver 15-Love porque el Jugador 1 tiene un punto y el Jugador 2 tiene 0", () => {
    let tennis = new Tennis();
    tennis.anotarP1();
    expect(tennis.obtenerScore()).toEqual("15-Love");
  });

  it("deberia devolver Deuce porque el Jugador 2 tiene 3 puntos y el Jugador 1 tiene 3 puntos", () => {
    let tennis = new Tennis();
    tennis.anotarP2();
    tennis.anotarP2();
    tennis.anotarP2();
    tennis.anotarP1();
    tennis.anotarP1();
    tennis.anotarP1();
    expect(tennis.obtenerScore()).toEqual("Deuce");
  });
  it("deberia devolver Deuce porque el Jugador 2 tiene 3 puntos y el Jugador 1 tiene 3 puntos", () => {
    let tennis = new Tennis();
    tennis.anotarP2();
    tennis.anotarP2();
    tennis.anotarP2();
    tennis.anotarP1();
    tennis.anotarP1();
    tennis.anotarP1();
    tennis.anotarP1();
    expect(tennis.obtenerScore()).toEqual("Advantage Player 1");
  });
});