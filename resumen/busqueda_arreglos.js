//********************************
//*** Iterando arreglos con for...in

var platillos = ["ceviche", "tacos", "pasta"];

for ( let i in platillos) {
    console.log(platillos[i])
}
//********************************
//*** Iterando arreglos con forEach

var platillos = ["ceviche", "tacos", "pasta"];

// platillos.forEach( platillo => console.log(platillo) )

platillos.forEach( (platillo, index) => console.log(index, platillo) )

//********************************
//*** Buscando en un arreglo
var platillos = ["ceviche", "tacos", "pasta"];

//var pElegido = platillos.find( platillo => platillo == "tostadas");


var menu = [
	{nombre: 'Ceviche', precio: 20, pais: 'Perú'},
	{nombre: 'Tacos', precio: 10 , pais: 'México'},
	{nombre: 'Pasta', precio: 50, pais: 'Italia'}
];

var pElegido = menu.find( platillo => platillo.nombre == 'Tacos');


console.log(pElegido)

//********************************
//*** Busqueda de índice de elementos

var platillos = ["ceviche", "tacos", "pasta"];

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    }
]


// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos' );

var numPlatillo = menu.findIndex( platillo => platillo.nombre == 'Pasta' );

console.log("Platillo número: ", numPlatillo);

//********************************
//*** Filtrar arreglos

var menu = [{
    nombre: 'Ceviche',
    precio: 20,
    pais: 'Perú'
},
{
    nombre: 'Tacos',
    precio: 10,
    pais: 'México'
},
{
    nombre: 'Pasta',
    precio: 50,
    pais: 'Italia'
},
{
    nombre: 'Quesadillas',
    precio: 15,
    pais: 'México'
}
];

var resultado = null;


//resultado =  menu.find(platillo => platillo.pais == 'México');


resultado =  menu.filter(platillo => platillo.pais == 'México');

console.log(resultado);

//********************************
//*** Validación de elementos de un arreglo

var resultado = null;

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
]


//resultado = menu.some( platillo => platillo.precio <= 10);
//console.log('¿Hay platillos abajo de 20? ', resultado);

resultado = menu.every( platillo => platillo.precio <= 60);
console.log('¿Todos los platillos cuestan menos de 10? ', resultado);