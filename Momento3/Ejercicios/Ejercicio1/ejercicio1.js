'use strict'

// let arr = [ 1, 2, 15 ];

// el método reordena el contenido de arr
arr.sort();

alert( arr );  // 1, 15, 2


function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr = [ 1, 2, 15 ];
  
  arr.sort(compareNumeric);
  
  alert(arr);  // 1, 2, 15

  
//for (let i=0; i<students.length; i++) {
  //  alert(`${students[i]} es el nro ${i} de la lista ${students00}`);
// }

//(a,b) => a+b 
 