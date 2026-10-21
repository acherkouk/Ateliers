// Excercice 1
let nombres = [10, 20, 30, 40];
let somme = nombres[0] + nombres[3];
console.log("Somme des deux premières nombres :", somme);
// Excercice 2
let temperatures = [18, 20, 23, 19]
console.log("Avant :", temperatures);
temperatures[1] = 21;
temperatures[temperatures.length - 1] = 25
console.log("Après :", temperatures);
// Excercice 3
let notes = [12, 8, 15, 9, 17];
notes[1] = 10;
notes[3] = 11;
console.log(notes[0]);
console.log(notes[notes.length - 1]);
console.log(notes);
console.log(notes.length);
// la différence entre lire notes[2] et modifier notes[2] = 10 est que la première action permet lire sa valeur, tandis que la deuxième action modifie cette valeur en lui assignant une nouvelle valeur (10).