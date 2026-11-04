// Exercice 1
let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
for (let i = 0; i < jours.length; i++) {
    console.log("Jour de la semaine : " + jours[i]);
}
// Exercice 2
let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];
for (let i = couleurs.length - 2; i >= 0; i = i - 2) {
    console.log(couleurs[i]);
}
// Exercice 3
let sequence = ["Ignition", 1, 2, 3, 4, 5, "Préparation"];
for (let i = sequence.length - 1; i >= 0; i--) {
    console.log(sequence[i]);
}
console.log("Décollage !");