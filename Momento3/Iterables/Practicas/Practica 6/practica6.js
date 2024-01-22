'use strict'

//Desestructuracion de objetos 

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  

  //title, width, height va a tener los valores del objeto options
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200