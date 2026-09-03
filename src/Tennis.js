class Tennis {
    constructor() {
        this.puntosP1 = 0;
        this.puntosP2 = 0;
    }

    anotarP1() {
        this.puntosP1++;
    }

    anotarP2() {
        this.puntosP2++;
    }

    obtenerScore() {
        const nombres = ["Love", "15", "30", "40"];

        if (this.puntosP1 >= 4 && this.puntosP1 - this.puntosP2 >= 2) {
            return "Gana Jugador 1";
        }
        if (this.puntosP2 >= 4 && this.puntosP2 - this.puntosP1 >= 2) {
            return "Gana Jugador 2";
        }

        if (this.puntosP1 === this.puntosP2) {
            if (this.puntosP1 >= 3) return "Deuce";
            return `${nombres[this.puntosP1]}-${nombres[this.puntosP2]}`;
        }

        if (this.puntosP1 >= 3 && this.puntosP2 >= 3) {
            return this.puntosP1 > this.puntosP2 
                ? "Advantage Player 1" 
                : "Advantage Player 2";
        }

        return `${nombres[this.puntosP1]}-${nombres[this.puntosP2]}`;
    }
}

export default Tennis;