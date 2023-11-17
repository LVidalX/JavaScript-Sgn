'use strict'

function multiplicar(multiplicador, multiplicando) {
    let suma = 0;
    for (let i=0; i < multiplicador; i++){
        suma = suma + multiplicando;
    }

    return suma;
}

let primerNumero = Number(prompt("Ingrese el valor 1"));
let segundoNumero = Number(prompt("Ingrese el multiplicando"));

let resultado = multiplicar(primerNumero, segundoNumero);
alert(resultado);