'use strict'

let result = arr.find(function(item, index, array) {
    // si true es devuelto aquí, find devuelve el ítem y la iteración se detiene
    // para el caso en que sea false, devuelve undefined
  });


  let users = [
    {id: 1, name: "Celina"},
    {id: 2, name: "David"},
    {id: 3, name: "Federico"}
  ];

 /*En este caso utilizamos find para encontrar dentro de users
   un item con id igual a 1 
 */ 
  
  let user = users.find(item => item.id == 1);  
  alert(user.name); // Como resultado mostrara el nombre de usuario con el id al que le pertenece.

  


  let users2 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  // Encontrar el índice del primer John
  alert(users.findIndex(user => user.name == 'John')); // 0
  
  // Encontrar el índice del último John
  alert(users.findLastIndex(user => user.name == 'John')); // 3