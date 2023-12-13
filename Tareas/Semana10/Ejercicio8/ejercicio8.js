'use strict'

/*Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un laboratorio.
Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde indica la fila A del laboratorio 2
*/

let laboratorio = "LAB2#A";

let letra="B";
let lastLetter = letra.codePointAt(0);
let nexLetter = lastLetter+1;
alert(String.fromCodePoint(nexLetter)); 
