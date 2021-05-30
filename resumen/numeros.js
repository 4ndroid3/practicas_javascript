"use strict" // transforma en el modo stricto de JS.

//********************************
//*** Propiedades númericas

console.log("MAX_VALUE: ", Number.MAX_VALUE);

console.log("MIN_VALUE: ", Number.MIN_VALUE);

console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);

console.log("NEGATIVE_INFINITY: ", Number.POSITIVE_INFINITY);

console.log("NaN: ", Number.NaN);

//********************************
//*** Métodos númericos


var numero = "10";


console.log('Number: ', typeof numero, typeof Number(numero));
console.log('parseInt: ',  parseInt(numero));
console.log('parseFloat: ', Number.parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));

//********************************
//*** Propiedades númericas de instancias

var numero = 2.5;

console.log("toExponential: ", numero.toExponential(4));

console.log("toFixed: ", numero.toFixed(2));

console.log("toPrecision: ", numero.toPrecision(6));

console.log("toString: ", typeof numero.toString());

