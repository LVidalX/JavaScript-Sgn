'use strict'

//Bucle con .entries()

let user = {
    name: "John",
    age: 30
  };
  
  // recorre claves y valores
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, luego age:30
  }


//codigo equivalente en map

let usuario = new Map();
usuario.set("name", "John");
usuario.set("age", "30");

// Map itera como pares [key, value], muy conveniente para desestructurar
for (let [key, value] of usuario) {
  alert(`${key}:${value}`); // name:John, luego age:30
}
