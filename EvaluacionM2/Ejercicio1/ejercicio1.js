'use strict'

/*Crear una función constructora para crear un Estudiante con las siguientes propiedades:
nombre, 
correo
promedio.
Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email
 Crear un objeto a partir de la función anterior y comprobar funciones 
*/

function Estudiante(nombre, correo, promedio){
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
}


let estudiante_1 = new Estudiante("Jose", "josejk35@gmail.com", "85")

let promedio = (estudiante_1.promedio);
let correo = (estudiante_1.correo);

function validarPromedio(promedio){
     promedio = (estudiante_1.promedio);

    if(promedio > 70){
        alert("Aprobado");
     } else {
        alert("Reprobado");
    }
    return promedio;
}

validarPromedio(promedio);

alert(correo);

let usuario;

function obtenerUsuario(usuario){
let pos;

pos = (correo.indexOf("@"));
usuario = (correo.substring(0, pos));

alert(usuario);
return usuario;

}

obtenerUsuario(usuario)



