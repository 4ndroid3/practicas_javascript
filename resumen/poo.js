"use strict";

//********************************
//*** Trabajando con Clases

class Pantalla {
    constructor() {

    }
}


const tvSala = new Pantalla();
const tvHabitacion = new Pantalla();

// function Pantalla(marca, modelo, pulgadas) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.pulgadas = pulgadas;
// }


// Pantalla.prototype.encendido = function () {
//     console.log(`La pantalla ${this.marca} se ha encendido`);
// };


// Pantalla.prototype.volumen = function () {
//     console.log(`El volumen se ha modificado`);
// };

// Pantalla.prototype.info = function () {
//     console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
// }

// const tvSala = new Pantalla('Master', 'Oasis', 55);
// const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);

"use strict";

//********************************
//*** Objetos, sus métodos y sus propiedades

class Pantalla {
    constructor(marca, modelo, pulgadas) {
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);

// function Pantalla(marca, modelo, pulgadas) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.pulgadas = pulgadas;
// }


// Pantalla.prototype.encendido = function () {
//    
// };


// Pantalla.prototype.volumen = function () {
//     
// };

// Pantalla.prototype.info = function () {
//     
// }

//********************************
//*** Herencia de  metódos y propiedades

class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    static get infoTienda() {
        console.log(`Productos de la tienda Patito Inc`);
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }

    get garantia() {
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto  {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('13579','Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('24680','Origin', 'Artemis', 80);