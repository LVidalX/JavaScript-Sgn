'use strict'

/*
Map y Set

Objetos para almacenar colecciones de datos ordenadas mediante una clave.
Arrays para almacenar colecciones ordenadas de datos.

Los métodos y propiedades son:

new Map() – crea el mapa.
map.set(clave, valor)) – almacena el valor asociado a la clave.
map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
map.has(clave) – devuelve true si la clave existe en map, false si no existe.
map.delete(clave) – elimina el elemento con esa clave.
map.clear() – elimina todo de map.
map.size – tamaño, devuelve la cantidad actual de elementos.
*/

let map = new Map();

map.set('1', 'str1');   // un string como clave
map.set(1, 'num1');     // un número como clave
map.set(true, 'bool1'); // un booleano como clave

// ¿recuerda el objeto regular? convertiría las claves a string.
// Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3




