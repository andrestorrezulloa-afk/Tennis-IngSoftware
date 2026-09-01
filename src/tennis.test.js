import Tennis from './Tennis.js';
describe('Tennis', () => {
  let tennis;

  beforeEach(() => {
    tennis = new Tennis();
  });

  it('should initialize with zero points for both players', () => {
    expect(tennis.puntosP1).toBe(0);
    expect(tennis.puntosP2).toBe(0);
  });

  it('should allow Player 1 to score points', () => {
    tennis.anotarP1();
    expect(tennis.puntosP1).toBe(1);
  });

  it('should allow Player 2 to score points', () => {
    tennis.anotarP2();
    expect(tennis.puntosP2).toBe(1);
  });

  it('should display the correct score when both players have zero points', () => {
    expect(tennis.obtenerScore()).toBe('Love-Love');
  });

  it('should display the correct score when Player 1 has one point and Player 2 has zero points', () => {
    tennis.anotarP1();
    expect(tennis.obtenerScore()).toBe('15-Love');
  });

  it('should display the correct score when Player 2 has one point and Player 1 has zero points', () => {
    tennis.anotarP2();
    expect(tennis.obtenerScore()).toBe('Love-15');
  });
});