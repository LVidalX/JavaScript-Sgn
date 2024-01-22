'use strict'

/* Ingresar un nombre con prompt y verificar si el nombre ingresado

se encuentra en el vector

*/


let students = ["Juan","Jose","Pedro","Maria","Alejandra"];

let nombre;

nombre = prompt("Ingresa nombre");

students.push(nombre);

let buscar = students.find(item => item == nombre); 

if(buscar == nombre){
    alert("Si se encuentra");
} else {
    alert("No se encuentra");
}

alert(students)




//Mostrar en un alert: "Si se encuentra" o "No se encuentra"