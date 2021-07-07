/*

SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

*/

// Array di base + lista vuota:

var firstNameList = ["Marco", "Paolo", "Arianna", "Marika", "Luisa", "Teresa"];
var lastnameList = ["Rossi", "Verdi", "Bianchi", "Russo", "Ricci", "Esposito", "Romano"];
var finalList = [];

/* STEP necessari per il funzionamento del programma:
1. Programma sceglie un nome
2. Programma sceglie un cognome
3. Unisce nome + cognome
4. Verifica la combinazione sia nuova e non ripetuta
5. Aggiunge la nuova combinazione all'array

N.B: fino a raggiungere 3 nome + cognome in lista

*/

// name + surname generator

var randomName = firstNameList[Math.floor(Math.random() * firstNameList.length)];

//check
console.log(randomName);

var randomLastname = lastnameList[Math.floor(Math.random() * lastnameList.length)];

//check
console.log(randomLastname);