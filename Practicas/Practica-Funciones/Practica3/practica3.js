/*Crear una funcion que realice una multiplicacion solo con sumas Es decir, recibira 2 parametros 
y realizara un bucle para ir sumando la cantidad de veces que se indique.
Al final la funcion devolvera el resultado
*/

'use strict'

function Multiplicacion(multiplicador, multiplicando){
    let Suma;

    Suma = 0;
    
    if(multiplicador >= 1 && multiplicando != 0){
        alert("La suma se repetira "+multiplicador+" vez/veces");

        for(let contador = 0; contador < multiplicador ; contador++){
             Suma = Suma+multiplicando;
        }
        
        alert(Suma);

    } else if(multiplicador == 0) { 
            alert("La suma no se repetira");
    } else {
        alert("No has ingresado un valor");
        alert("La suma no se repetira");
    } 
} 

let primerNumero = Number(prompt("Ingresa el primer numero"));
let segundoNumero = Number(prompt("Ingresa el multiplicando"));

Multiplicacion(primerNumero, segundoNumero);

