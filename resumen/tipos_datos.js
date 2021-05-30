"use strict"
// Numeros
var edad = 35;

var cantidad = "100";

var nuevaCantidad = Number(cantidad);

parseInt()

parseFloat()

// Texto
var bebida = "agua";

var comida = 'ceviche';

var instrucción = "El platillo se llama 'ceviche' ";

var edad = 34;

var edadtxt = String(edad)

// Booleanos
var activo = false;

var estado = Boolean( 10 > 9)

// Date
var fecha = new Date();

// Simbolo
var simbolo1 = Symbol();
var simbolo2 = Symbol();

var ambiente = Symbol('dev');

// JSON => JavaScript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON)
