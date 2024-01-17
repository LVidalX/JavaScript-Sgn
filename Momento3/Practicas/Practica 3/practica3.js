'use strict'

// El método arr.forEach permite ejecutar una función a cada elemento del array.

arr.forEach(function(item, index, array) {
    // ... hacer algo con el elemento
  });

  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });