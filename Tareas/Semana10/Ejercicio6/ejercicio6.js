'use strict'

//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

let url = "facebook.com/CifuentesKing03";
let posicion = (url.indexOf("/"));

while(posicion == 12){
    posicion++;
}

alert(url.substring(posicion, 28))

