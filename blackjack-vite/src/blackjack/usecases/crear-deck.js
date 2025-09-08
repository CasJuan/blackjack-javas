import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * Esta funcion crea un nuevo dek
 * @param {Array<String>} tipoSCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tipoSEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposCartas, tiposEspeciales) => {

    if(!tiposCartas || tiposCartas.length === 0 ) throw new Error ('Tipos de cartas es obligatorio como un arreglo de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error ('Tipos de especiales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }
    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );
    
} 