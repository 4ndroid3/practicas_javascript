//********************************
//*** Creando tu primer arreglo

var platillos = [ "ceviche", "tacos", "pasta"];

var bebidas = new Array( "Jamaica", "Chicha Morada", "Pozol" );

console.log(Array.isArray(platillos), bebidas)

//********************************
//*** Medir y acceder a un arreglo

var platillos = ["ceviche", "tacos", "pasta", "tostadas"];


console.log("Hay "+ platillos.length + " platillos en el menú");

var platillo = platillos[platillos.length -1];

console.log("El platillo seleccionado es: ", platillo)

//********************************
//*** Arreglos multidimensionales | Arreglo de arreglos

var platillos = ["ceviche", "tacos", "pasta"];
var paises = ["Perú", "México", "Italia"];


var menu = [ platillos, paises ];

console.log( menu[1][0]  )


//********************************
//*** Operaciones básicas de un arreglo

var platillos = ["ceviche", "tacos", "pasta"];

console.log('Antes:', platillos);

//platillos.push("Tostadas");

//platillos.push("Queso");

// platillos.pop();
// platillos.pop();

var mensaje = platillos.join();
console.log( mensaje);

//console.log('Después:', platillos);

//********************************
//*** Generación de arreglos con split() from() y of()


//--- split()

// var mensaje = "ceviche, tacos, pasta";

// var platillos = mensaje.split(', ');

//--- Array.from();
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'))

var platillos = platillosHTML.map( platillo => platillo.textContent )

//--- Array.of();

var platillos = Array.of("ceviche", "tacos", "pasta");

console.log(platillos)

//********************************
//*** Ordenando un arreglo

var platillos = ["Ceviche", "Tacos", "Pasta"];

console.log('Antes: ', platillos);

platillos.sort(); 

console.log('Ordenado: ', platillos);

platillos.reverse(); 

console.log('Después: ', platillos);


platillos.reverse(); 

console.log('Reversa de nuevo: ', platillos);

//********************************
//*** Desestructuración de arreglos

var platillos = ["ceviche", "tacos", "pasta", "tostadas"];

// var platillo1 = platillos[0];
// var platillo2 = platillos[1];
// var platillo3 = platillos[2];

// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;
// var platillo4 = null;

var [platillo1, platillo2, platillo3, platillo4] = platillos;

console.log(platillo1, platillo2, platillo3, platillo4)

