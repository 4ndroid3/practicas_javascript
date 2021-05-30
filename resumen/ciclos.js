"use strict"

/***** CICLOS *****/
// 
// Ciclos | Loops | Iteradores
// 
// 2 tipos: Definidos e indefinidos
//
// Definidos: Ciclo FOR
//  
// Indefinidos: Ciclo WHILE y Ciclo DO...WHILE
//
/******************/


//********************************
//*** Ciclo FOR | Ciclo Definido
// Repetición = iteración

// COMPONENTES DE UN CICLO FOR
// Contador
// Condición o evaluación
// Paso | incrementador o decrementador


var productos = 5;

for (let contador = 0; contador < productos; contador++) {
    console.log("Producto #"+ contador);
    debugger;
}

//********************************
//*** Ciclo WHILE | Ciclo Indefinido
// Iteración indeterminada o desconocida

var productos = 5; 

while(productos > 0) { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
}

//********************************0
//*** Ciclo DO..WHILE | Ciclo Indefinido
// Iteración indeterminada o desconocida


var productos = 5; 


do { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
} 
while(productos>=1)

//********************************0
//*** Control de ciclos
// break | continue

var contador = 0 
var cuenta = 0;

for(contador = 0;contador<= 20;contador++) { 
    if(contador == 5){
        break
    }
   if (contador % 2 == 0) { 
      continue;
   } 
   cuenta++;
   debugger;
} 

console.log("Hay" + cuenta + " números impares");