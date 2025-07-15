class Vehiculo {
    constructor(marca, modelo, año,) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        
    }
    obtenerDetalles() {
        return "Marca: " + this.marca + "\nModelo: " + this.modelo + "\nAño: " + this.año;
    }
}


class Coche extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }
    obtenerDetalles() {
        return super.obtenerDetalles() + "\nNúmero de puertas: " + this.numeroPuertas;

    }
}
    
class Moto extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }
    obtenerDetalles() {
        return super.obtenerDetalles() + "\nCilindrada: " + this.cilindrada;
    }
}

const coche = new Coche("Fiat", "500", "2020",4);
const moto = new Moto("Yamaha", "MT-07", "2021",500);

console.log(coche.obtenerDetalles());
console.log(moto.obtenerDetalles());