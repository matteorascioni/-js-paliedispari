// PARI E DISPARI 
var numUtente = parseInt( prompt('Inserisci un numero' ) );

somma = pariDispari(numUtente) + getRandomNumber();

if (somma == 'pari') {
    console.log('Il numero passato è pari');
} else {
    console.log('Il numero passato è dispari');
}

// FUNZIONE PARI O DISPARI
function pariDispari(numero) {
    if (numero % 2 == 0 ) {
        return 'pari'
    }
    return 'dispari'
}


// FUNZIONE NUMERI RANDOM 
function getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return (random);
}