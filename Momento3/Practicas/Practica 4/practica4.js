'use strict'

// Los métodos arr.indexOf y arr.includes tienen una sintaxis similar y
// hacen básicamente lo mismo que sus contrapartes de strings, pero operan 
// sobre elementos en lugar de caracteres:

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true