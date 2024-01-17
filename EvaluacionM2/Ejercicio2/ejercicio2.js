'use strict'

/*A a partir del array ages=[15, 50, 45] agregue su edad. Usando un for con un if,
muestre en pantalla  solo las edades mayores a 25
*/

let ages = ["15", "50", "45"]

ages.pop("45");
ages.pop("50");

ages.push("19");
ages.push("45");
ages.push("50");

alert(ages);

for(let i = 0; i < ages.length; i++){
}