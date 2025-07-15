const prompt = require("prompt-sync")();
class Figura {
    constructor(color) {
        this.color = color;
    }
    area() {
        return 0;
    }
}

class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }

}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}
const rectangulo = new Rectangulo("rojo", 10, 5);
const circulo = new Circulo("azul", 5);

console.log("Área del rectángulo de color", rectangulo.color + ":", rectangulo.area());
console.log("Área del círculo de color", circulo.color + ":", circulo.area().toFixed(2));