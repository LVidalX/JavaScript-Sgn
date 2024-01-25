'use strict'

let edades = [2,4,6,8,10,12,14,16,18,20];

let pedazo = edades.slice(3,7);


//alert('slice: '+pedazo);


alert(`slice: ${pedazo}`);

let nuevasEdades = edades.concat([22,24]);
//alert(`concat: ${nuevasEdades}`);

let students = ["Matias", "Alexander", "Nathaly", "Alex"];

students.forEach(alert);

students.forEach(
    (item, index, array) => {
   alert(`${item} es el nro ${index} de la lista ${array}`);
 }
  
);

function sumar(a,b){
    return a+b;
 }

 //otra forma
(a,b) => {
    return a+b;
 }

 //forma abreviada
 (a,b) => a+b 
 
 //for mas rapido llamando directamente al metodo alert
for (let i=0; i<students.length; i++) {
    alert(`${students[i]} es el nro ${i} de la lista ${students00}`);
}