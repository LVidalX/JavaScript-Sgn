
//Funcion constructora

'use strict'

function Vehiculo (placa, color) {
    this.placa = placa
    this.color = color
}

let moto = new Vehiculo ("JGH-383"+", Blue");
alert(moto.placa, moto.color)

let carro = new Vehiculo("JDS-532"+", Red")
alert(carro.placa, carro.color);