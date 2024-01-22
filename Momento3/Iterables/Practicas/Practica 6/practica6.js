'use strict'

//WeakSet

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

//añadiendo usuarios
visitedSet.add(john); //
visitedSet.add(pete); // 
visitedSet.add(john); // 

// visitedSet tiene 2 usuarios ahora

// comprobar si visitedSet contiene john
alert(visitedSet.has(john)); // true

// comprobar si visitedSet contiene mary
alert(visitedSet.has(mary)); // false


john = null;
// visitedSet se limpiará automáticamente