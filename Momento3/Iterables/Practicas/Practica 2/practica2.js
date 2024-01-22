'use strict'

/*Iterables son objetos que implementan el método Symbol.iterator, como se describió anteriormente.
simil-array son objetos que tienen índices y longitud o length, por lo que se “ven” como arrays.
*/

//metodo Array.from

let arrayLike = {
    0: "Hola",
    1: "Mundo",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // Mundo (el método pop funciona)