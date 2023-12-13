/* Crear una funcion constructora para los productos de una tienda. Mostrar los nombres de los
productos una vez creado los objetos 
*/
'use strict'

function Electrodomestico(marca, año, material, precio, codigo){
    this.marca = marca;
    this.año = año;
    this.material = material;
    this.precio = precio;
    this.codigo = codigo;

}

let refigerador = new Electrodomestico("GNB"+ " 2017" +" acero"+ " $380"+ " HJ-5331-3199");
alert(refigerador.marca, refigerador.año, refigerador.material, refigerador.precio, refigerador.codigo);

let lavadora = new Electrodomestico("KOP" + " 2020" + " chapa metalica" + " $300" + " G41KFJ315D");
alert(lavadora.marca, lavadora.año, lavadora.material, lavadora.precio, lavadora.codigo);

