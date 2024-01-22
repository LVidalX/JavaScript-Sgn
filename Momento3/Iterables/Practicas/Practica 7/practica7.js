'use strict'

//Symbol.interator
  
  // Queremos que el for..of funcione de la siguiente manera:
  // for(let num of range) ... num=1,2,3,4,5
  /*
  Para hacer esto necesitamos que el objeto sea iterable agregandole
  el metodo Symbol.interactor

  Cuando se inicia el objeto este llama al metodo una vez o a su vez 
  genera un error si no lo encuentra, el metodo devuelve un iterador next()

  Cuando range quiere el siguiente valor pasa a llamar a el iterador en ese objeto
  */

  let range = {
    from: 1,
    to: 5
  };
  
  // 1. Llamado de for.. of
  range[Symbol.iterator] = function() {
  
    // ... devuelve el objeto iterador:
    // 2. For.. of trabaja con los valores de from y to
    return {
      current: this.from,
      last: this.to,
  

      // 3. next() es llamado en cada iteración por el bucle for..of
      next() {


        // 4. debe devolver el valor como un objeto {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  
  for (let num of range) {
    alert(num); // 1, luego 2, 3, 4, 5
  }