
//Abreviatura de metodo

'use strict'

let usuario = {
    saludar: function(){
        alert("Hola");
    }
};

usuario.saludar();

//forma abreviada

 usuario = {
    saludar() {
        alert("Hola_2");
    }
};

usuario.saludar();

