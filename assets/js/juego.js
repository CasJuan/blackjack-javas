/*
c = treboles
d = diamantes
h = corazon
s = picas
*/ 


let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//Esta funcion crea un nuevo deck
const crearDeck = () => {

    for(let i = 2; i <= 10; i++){
        for (let tipo of tipos) {
            deck.push(i + tipo)
        }
    }

    for(let tipo of tipos){
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }

    deck = _.shuffle(deck);
    return deck;

}

crearDeck();

//Esta funcion me permite pedir una carta
const pedirCarta = () => {
    if (deck.length === 0){
        throw 'No hay cargas en el deck';
    }

    const carta = deck.pop();
    console.log(carta)
    
    return carta;
}

pedirCarta();