"use strict"

//********************************
//*** Creando cadena de texto

var pais = 'México';

var comida = new String("Ceviche");

//********************************
//*** Medir una cadena de texto

var mensaje = "Estoy aprendiendo JavaScript";

console.log("La cadena de texto tiene: " + mensaje.length + " letras");

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// indexOf
// resultado = mensaje.indexOf("aprendiendo");


// lastIndexOf
//resultado = mensaje.lastIndexOf("aprendiendo");


// search:
//resultado = mensaje.search("aprendiendo");


// search | Expresión regular
resultado = mensaje.search(/ja/i);


console.log(resultado);

//********************************
//*** Métodos búsqueda | Parte 2

var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

var resultado;

// match:
// resultado = mensaje.match(/aprendiendo/gi);


// substr:
// resultado = mensaje.substr(6,11);


// substring:
//resultado = mensaje.substring(6,17);


// charAt:
 resultado = mensaje.charAt(0);


console.log(resultado);

//********************************
//*** Métodos búsqueda | Parte 3

var mensaje = "Estoy aprendiendo JavaScript";
var resultado;


// startsWith
// resultado = mensaje.startsWith("es");

// var textoEn =  mensaje.indexOf("JavaScript")
// resultado = mensaje.startsWith("Ja", textoEn);



// endsWith
// resultado = mensaje.endsWith("JavaScript");



// includes
resultado = mensaje.includes("Estoy", 6);



console.log(resultado);

//********************************
//*** Métodos de generación, reemplazo y separación

var mensaje = "      Estoy aprendiendo JavaScript        ";

var resultado;

// repeat
// resultado = mensaje.repeat(200);

// replace
//resultado = mensaje.replace("JavaScript", "a programar");


// slice
// resultado = mensaje.slice(6);
// resultado = mensaje.slice(6, 11)


// split
// resultado = mensaje.split(" ");

// trim
resultado = mensaje.trim();

console.log(resultado);

"use strict"

//********************************
//*** Métodos de transformación

var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y programación";
var total = 123456;

var resultado;

//resultado = total.toString();
// resultado = mensaje.toLowerCase();
// resultado = mensaje.toUpperCase();


resultado = mensaje.concat(mensaje2, ' y tengo muchas ideas', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123');


console.log(resultado);

//********************************
//*** Plantillas y literales


var lenguaje = 'JavaScript';

var lenguaje2 = 'HTML';

var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;

//console.log(mensaje);


//---- Mensaje multilinea
var mensajeMultilinea = `
    Hola mundo,
	estoy aprendiendo
	${lenguaje} y me gusta
	como se integra con HTML y CSS`;


console.log(mensajeMultilinea);

