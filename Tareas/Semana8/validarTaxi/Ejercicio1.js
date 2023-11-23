'use strict'

let vehicle = {
    make: "Hyundai",
    model: 'Compact',
    color: 'Yellow',
    licensePlate: 'NYK-524',
    year: 2015,
    isEnable: true
}

/*Crear una funcion 'validarTaxi' que reciba como parametro el objeto vehicle y devuelva true si la antiguedad 
del vehiculo es menor o igual a 10 años, y false si es mas.
*/

function validarTaxi(año) {
    let añoActual = 2023
    let Antiguedad
    
    Antiguedad =(añoActual - año)

    if(Antiguedad <= 10) {
        Antiguedad = true
        alert("Antiguedad: "+ Antiguedad) 
    } else {
        Antiguedad = false
        alert("Antiguedad: "+Antiguedad)
    }
}

validarTaxi(vehicle.year)

