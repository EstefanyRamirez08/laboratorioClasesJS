class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }
    calcularSalario() {
        return this.salarioBase 

    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }
    calcularSalario() {
        return super.calcularSalario() + this.bonificacion;
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, edad, salarioBase, lenguaje) {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
    calcularSalario() {
        return super.calcularSalario() 
    }
}

const gerente = new Gerente("Juan", 30, 5000, 1000);
const desarrollador = new Desarrollador("Carlos", 25, 4000, "Java");

console.log("Salario Gerente: " + gerente.calcularSalario());
console.log("Salario Desarrollador: " + desarrollador.calcularSalario());



