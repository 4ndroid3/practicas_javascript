"use strict"

//********************************
//*** Ventana de alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
   alert("MENSAJE \n\n El video ha terminado");
});

//********************************
//*** Ventana de confirmación

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
    let resultado = confirm("¿Deseas ver el video nuevamente?");
    console.log(resultado);
    if (resultado) {
        video.play();
    }else {
        window.location = "http://www.google.com";
    }

});

//********************************
//*** Ventana para ingreso de datos

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
   let email = prompt("Escribe tu correo para ver mas videos",  "data@info.com");
  
   if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
});