'use strict'


let word = "Hola Mundo";

for(let char of word){
alert(char);
}


/*
String es iterable

Tambien permite trabajar mediante codificacion UTF-16
*/

for (let char of "test") {
    // Se dispara 4 veces: una vez por cada carácter
    alert( char );  //deletrea
  }


 
// Hace lo mismo que for of pero de una forma mas extensa

let str = "Hola";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // retorna los caracteres uno por uno
}

