'use strict'

let computer = {
    nombre: "Carlos",
    edad: 18,
    ram: 16,

     showAge() {
        alert("edad: " + this.edad);
    },

    updateAge: function(newValue){
        this.edad = newValue;
    },
}

computer.showAge();
computer.updateAge(32);
computer.showAge();



//forma normal
//showAge: function(){
//}


//forma abreviada
//showAge()
