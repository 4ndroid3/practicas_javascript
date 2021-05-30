"use strict"

//********************************
//*** Condición IF

var datoA = 110;
var datoB = 20;
var resultado = "Sin datos";

if( datoA > datoB ){
    resultado = "La condición se cumplió";
}

console.log("El resultado de la evaluación if es: ", resultado);

//********************************
//*** Condición IF-ELSE

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB){
	resultado = "La condición se cumplió";
} else {
    resultado = "La condición no se cumplió";
}

console.log("El resultado de la evaluación if-else es: ", resultado);

//********************************
//*** Condición IF-ELSE-IF

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";


if (datoA > datoB){
	resultado = "La primer condición se cumplió";
} else if (datoB == datoA){
    resultado = "La segunda condición se cumplió";
}  else if (datoB == datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB >= datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB <= datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB != datoA){
    resultado = "La segunda condición se cumplió";
} else {
	resultado = "No se cumplieron las condiciones";
}

console.log("El resultado de la evaluación if-else-if es: ", resultado);

//********************************
//*** Condiciones anidadas

var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if (datoA > datoB){
    resultado = "La condición se cumplió";
    
    if (datoC < datoB){
		 if (datoC < datoB){
		resultado = "Evaluación anidada verdadera";
        } else { 
            resultado = "No se cumplió la evaluación anidada";
        }
	} else { 
		resultado = "No se cumplió la evaluación anidada";
	}

} else { 
	resultado = "No se cumplió la evaluación";
}

console.log("El resultado de la evaluación anidada es: ", resultado);

//********************************
//*** Estructura SWITCH

// Evaluación con números
var edad = 40;
var resultado = "";

switch (edad) {
    case 10:
		resultado = "La edad es 10 años";
	break;
	case 20:
		resultado = "La edad es 20 años";
	break;
    case 30:
		resultado = "La edad es 30 años";
    break;
    case 40:
		resultado = "La edad es 40 años";
	break;
    default:
    	resultado = "Ningún caso coincide";
    break;
}


console.log("El resultado de la evaluación con números es: "+ resultado)

// Evaluación con cadena de texto
var producto = "Radio";

switch (producto) {
    case "TV":
		resultado = "Se eligió la TV";
	break;
	case "Radio":
		resultado = "Se eligió el Radio ";
	break;
    case "Teléfono":
		resultado = "Se eligió el teléfono ";
	break;
    default:
    	resultado = "No se eligió ningún producto";
    break;
}

console.log("El resultado de la evaluación con texto es: "+ resultado)
