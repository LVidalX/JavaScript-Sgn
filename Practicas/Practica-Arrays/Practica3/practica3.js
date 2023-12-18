'use strict'

//Metodos de Arrays



let estudiantes = ["Aguilera", "Bermello", "Calle", "Calle", "Carriel", "Correa", ];

alert(estudiantes);

//Metodo push, agrega un elemento mas
estudiantes.push("Criollo");
alert(estudiantes);

//Metodo shift, el segundo elemento del array pasa a ser primero, en resumen extrae un ítem del inicio
estudiantes.shift();
alert(estudiantes);

//Metodo pop, extrae un item del final

estudiantes.pop();
alert(estudiantes);

//Metodo unshift, agrega ítems al principio

estudiantes.unshift("CJ");
alert(estudiantes);