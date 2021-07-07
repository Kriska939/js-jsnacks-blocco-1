/*

SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.

*/

// array con diversa length:

var firstArray = [1, 2, 3, 4, 8, 9, 10, 11];
var secondArray = [2, 3];


while (firstArray.length !== secondArray.length) {

    var newNumber = Math.floor(Math.random() * 100) + 1;

    if (firstArray.length < secondArray.length) {
        firstArray.push(newNumber);
    }
    else {
        secondArray.push(newNumber);
    }

}

//check

console.table(firstArray);
console.table(secondArray);

// STAMP 

var insertFirstArray = document.getElementById("result");

var insertSecondArray = document.getElementById("second-result");

insertFirstArray.innerText = firstArray;
insertSecondArray.innerText = secondArray;