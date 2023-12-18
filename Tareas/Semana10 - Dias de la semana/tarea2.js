'use strict'

/*Partiendo del siguiente array, realizar las operaciones necesario para ordenar los días de la semana:

let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

Eliminar el día domingo del inicio de la lista.
Agregar el día lunes al inicio de la lista.
Agregar el día domingo al final de la lista.
Insertar el día viernes en la posición correspondiente.
Mostrar en pantalla de elemento en elemento usando un for.
Usar los métodos: push, pop, shift, unshift, splice  */

let semana = ["Domingo", "Martes", "Miercoles", "Jueves", "Sabado"]


semana.shift();

semana.unshift( "Lunes" );

semana.push( "Domingo" );

semana.splice(4,0 , "Viernes");


for (let i = 0; i < semana.length; i++) {
    alert(semana[i]);
}


