"use strict"

//Substring

let mensaje = "Hola mundo";
let codigo = "KJV-513";
let message = "cuencanos";
let palabra = "ecuatoriano";

alert( mensaje[1]);
alert( mensaje.at(1));

//toUpercase  mayuscula

alert(mensaje.toUpperCase());

//toLowerCase  minuscula

alert(mensaje.toLowerCase());

//devuelve el numero especificado 

alert(mensaje.indexOf('mundo'));  //todo en minuscula

alert(codigo.indexOf('-'));

//subString
alert(message.substring (0, 3))

//inicia en 0
//palabra.length --> total de caracteres

let contador = 0;
let palabra_b = (palabra.length);

alert(palabra.length)

for(i = 0; i > palabra_b; i++){
    if(palabra [i] == 'a'){
        contador++;
        alert(contador);
    } else {
        alert(0)
    }
}


