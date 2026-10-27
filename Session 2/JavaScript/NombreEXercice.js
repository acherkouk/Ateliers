const prompt = require("prompt-sync")();
let somme = 0;
let nombreClass = Number(prompt("Donnez le nombre de classes : "));
for (let i = 1; i <= nombreClass; i++) {
    let note = Number(prompt("Donnez la note : "));
    somme = somme + note;
};
let nombreMoyenne = somme / nombreClass;
console.log("La moyenne de la classe est : " + nombreMoyenne);