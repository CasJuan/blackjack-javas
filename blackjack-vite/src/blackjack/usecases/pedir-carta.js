// Esta función pide una nueva cart
/**
 * Esta funcion crea un nuevo dek
 * @param {Array<String>} deck 
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = (deck) => {
        if (  !deck || deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }