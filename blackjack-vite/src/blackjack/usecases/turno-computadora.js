import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 * @param {*} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck = [] ) => {

    if(!puntosMinimos) throw new Error ('Puntos minimos es necesario');
    if(!puntosHTML) throw new Error ('Puntos necesario');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta (carta);
        puntosHTML.innerHTML = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    
     setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );

} 