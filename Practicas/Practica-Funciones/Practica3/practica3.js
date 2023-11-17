/*Crear una funcion que realice una multiplicacion solo con sumas Es decir, recibira 2 parametros 
y realizara un bucle para ir sumando la cantidad de veces que se indique.
Al final la funcion devolvera el resultado
*/

'use strict'

function getMult_Suma(a,b,repeat){
    let Suma;
    let result;

    Suma=(a+b);
    alert(Suma);
    
    
    if(repeat >= 1){
        alert("El bucle se repetira "+repeat+" vez/veces");

        for(let contador = 1; contador <= repeat ; contador++){
             result=(Suma+(a+b)*contador)
             alert(result); 
        }
    } else if(repeat == '' || repeat == null){
        alert(repeat);
        alert("No se repetira la suma");
    }
} 

let a = Number(prompt("Ingresa el primer numero"));
let b = Number(prompt("Ingresa el segundo numero"));
let repeat = Number(prompt("Ingresa el numero de veces que quieres repetir la suma"));

getMult_Suma(a,b, repeat);
