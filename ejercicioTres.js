class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    descripcion() {
        return "Nombre: " + this.nombre + "\nPrecio: " + this.precio + "\nMarca: " + this.marca;
    }   
}

class Telefono extends Producto {
    constructor(nombre, precio, marca, almacenamiento, ram) {
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    descripcion() {
        return super.descripcion() + "\nAlmacenamiento: " + this.almacenamiento + "\nRam: " + this.ram;
    }
}
class Laptop extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    descripcion() {
        return super.descripcion() + "\nProcesador: " + this.procesador + "\nPulgadas: " + this.pulgadas;
    }
}

const telefono = new Telefono("Iphone", 1400, "apple", 250, 8);
const laptop = new Laptop("VivoBook", 700, "Asus", 7, 16);

console.log(telefono.descripcion());
console.log(laptop.descripcion());
