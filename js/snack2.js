/*

SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.

*/

var resultNumber = document.getElementById("result");

var userNumber = 0;

do {
    userNumber = parseInt(prompt("Choose a number", "1"));
} while (isNaN(userNumber));

// logic to print numbers 

if (userNumber % 2 === 0) {
    resultNumber.innerText = userNumber;
} else {
    resultNumber.innerText = userNumber + 1;
}