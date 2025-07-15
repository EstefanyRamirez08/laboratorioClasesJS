class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido() {
        console.log(this.nombre + " Tiene " + this.edad + " años y hace: ");
    }
}

class Perro extends Animal {
    constructor(nombre, edad, sonido) {
        super(nombre, edad);
        this.sonido = sonido;
    }
    emitirSonido() {
        super.emitirSonido();
        console.log(this.sonido);
    }
}
class Gato extends Animal {
    constructor(nombre, edad, sonido) {
        super(nombre, edad);
        this.sonido = sonido;
    }
    emitirSonido() {
        super.emitirSonido();
        console.log(this.sonido);
    }
}

const perro = new Perro("Rex", 5, "Guauuu");
const gato = new Gato("Misu", 3, "Miauu");
        
perro.emitirSonido();
gato.emitirSonido();