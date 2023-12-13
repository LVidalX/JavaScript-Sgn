'use strict'

/*Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde
el formato de numeracion de las oficinas es "01.24" lo que significa piso 1, oficina 24.
*/

let oficina = "01.14"

let posicion = (oficina.indexOf('.'));

let piso = (oficina.substring(0, posicion))

alert(piso);



