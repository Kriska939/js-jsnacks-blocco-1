/*

SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

*/


// versione for

var somma = 0;

// for (var i = 0; i < 5; i++) {
//     var userNumber = parseInt(prompt("Choose a number", 1));

//check numeri inseriti
//     console.log(userNumber);

//     if (!isNaN(userNumber)) {
//         somma += userNumber;
//     }
// }


// versione while

var i = 0;
while (i < 5) {

    var userNumber = parseInt(prompt("Choose a number", 1));

    //check numeri inseriti
    console.log(userNumber);

    // alternative for validation > we don't use IF
    while (isNaN(userNumber)) {
        userNumber = parseInt(prompt("Choose a number", 1));
    }

    somma += userNumber;
    i++
}

// check somma
console.log(somma);
