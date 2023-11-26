'use strict'

let nombre = 'Juan';
let apodo = nombre;

alert(nombre);
alert(apodo);

let persona = {
    firstname: 'Juan' 
}

//Transfiere la direccion de los valores a otro objeto

let otherPerson = persona;
alert(persona.firstname)
alert(otherPerson.firstname)

otherPerson.firstname = 'Jhon';

alert(otherPerson.firstname)