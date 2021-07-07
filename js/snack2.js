/*

SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.

*/

var resultNumber = document.getElementById("result");

var userNumber = parseInt(prompt("Choose a number", 1));

if (userNumber % 2 === 0) {
    resultNumber.innerText = userNumber;
} else {
    resultNumber.innerText = userNumber + 1;
}