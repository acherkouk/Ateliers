// Exercice 1
let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];
let recherche = "Nadia";
let position = -1;
for (let i = 0; i < prenoms.length; i++) {
    if (prenoms[i] === recherche) {
        position = i;
        break;
    }
}
if (position !== -1) {
    console.log("Nadia se trouve à l'index:", position); 
} else {
    console.log("Prénom introuvable.");
}
// Exercice 2
let notes = [12, 17, 9, 14, 18, 11];
let maximum = notes[0];
let positionMax = 0;
let minimum = notes[0];
for (let i = 1; i < notes.length; i++) {
    if (notes[i] > maximum) {
        maximum = notes[i];
    }
    if (notes[i] < minimum) {
        minimum = notes[i];
    }
}
console.log("La note maximale est :", maximum);
console.log("La note minimale est :", minimum);
// Exercice 3
let nombres = [23, 15, 42, 9, 31, 18, 42, 5];
let max = nombres[0];
let min = nombres[0];
let indexMax = 0;
let indexMin = 0;
let cherche = 31;
let indexCherche = -1;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] > max) {
        max = nombres[i];
        indexMax = i;
    }
    if (nombres[i] < min) {
        min = nombres[i];
        indexMin = i;
    }
    if (nombres[i] === cherche && indexCherche === -1) {
        indexCherche = i;
    }
}
console.log("Maximum :", max, "(Index :", indexMax + ")");
console.log("Minimum :", min, "(Index :", indexMin + ")");
if (indexCherche !== -1) {
    console.log("La valeur " + cherche + " est présente dans le tableau.");
} else {
    console.log("La valeur " + cherche + " est absente du tableau.");
}