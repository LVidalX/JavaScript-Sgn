'use strict'

//WeakMap  

/*
La primera diferencia con Map es que en WeakMap las claves deben ser objetos, no valores primitivos:
*/

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // funciona bien (la clave es un objeto)

// no puede usar un string como clave
weakMap.set("test", "Whoops"); // Error, porque "test" no es un objeto


/*let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // sobreescribe la referencia

John se elimno

*/ 