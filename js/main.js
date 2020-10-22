// // PARI E DISPARI 
// var sceltaUtente = prompt('Scegli pari o dispari');

// var numUtente = parseInt( prompt('Inserisci un numero' ) );

// var numPc = getRandomNumber(1, 5);
// console.log(numPc);

// var somma = numUtente + numPc;

// var pariDisparo = pariDispari(somma);

// console.log(somma);

// if (pariDisparo == sceltaUtente) {
//     console.log('hai vinto');
// } else {
//     console.log('hai perso');
// }

// // FUNZIONE PARI O DISPARI
// function pariDispari(numero) {
//     if (numero % 2 == 0 ) {
//         return 'pari'
//     } else {
//       return 'dispari'
//     }
// }

// // FUNZIONE NUMERI RANDOM 
// function getRandomNumber(min, max) {
//     var random = Math.floor(Math.random() * (max - min + 1) + min);
//     return random;
// }


// PALINDROMA
var parolaUtente = prompt('Inserisci la parola');
console.log('Parola: ', parolaUtente);

// INVOCAZIONE 
parolaGirata = wordReverse(parolaUtente);
console.log('Parola al contrario: ', parolaGirata);

if (parolaGirata == parolaUtente) {
    console.log('la parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

// FUNCTION WORD REVERSE
function wordReverse(word) {
    
    var reverse = '';

    for (var i = word.length - 1; i >= 0; i-- ) {
        reverse += word[i];
    }

    return reverse; 
}