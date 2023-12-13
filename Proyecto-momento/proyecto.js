'use strict'

/*Crear un juego de cartas, del 1 al 10, metodo mostrar vidas
*/

function Jugador(nickname, vidas, carta) {
    this.nickname = nickname;
    this.vidas = vidas;
    this.carta = carta; 
    this.disminuirVidas = function () {
        this.vidas
    }
    //funcion para que devuelva el nombre y las vidas

}

let jugadorHumano = new Jugador("Elias",3,7);
//interaccion con HTML
let labelPUno = document.getElementById("nick-player-uno");
labelPUno.innerHTML=`Nick J1: ${jugadorHumano.nickname}`

let jugadorDos = new Jugador("Luis", 3, 9)
let labelPDos = document.getElementById("nick-player-dos");
labelPDos.innerHTML = `Nick J2: ${jugadorDos.nickname}`