'use strict'

//Escribir un programa que extraiga la parte numerica de una placa de un auto

let placa = "CHF-357";

let tamaño = placa.length;

let numero_placa = (placa.substring(4, tamaño));

alert(numero_placa);