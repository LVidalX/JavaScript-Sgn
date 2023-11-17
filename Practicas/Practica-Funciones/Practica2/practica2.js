'use strict'

function calculateAge(year){
    let currentYear = 2023;
    let age = (currentYear - yearofBirthday);
    alert(age);
}

let yearofBirthday = Number(prompt("Ingresa tu año de nacimiento"));
calculateAge(yearofBirthday);

