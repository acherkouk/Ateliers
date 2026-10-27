const prompt = require("prompt-sync")();

let nom = prompt("Entrez le nom de l'employé : ");
let Base = parseFloat(prompt("Entrez le salaire de base (en DHS) : "));
let heuresSup = parseFloat(prompt("Entrez le nombre d'heures supplémentaires : "));
let tarif = parseFloat(prompt("Entrez le tarif d'une heure supplémentaire (en DHS) : "));
let prime = parseFloat(prompt("Entrez la prime (en DHS) : "));

let montantHeuresSup = heuresSup * tarif;
let Brut = Base + montantHeuresSup + prime;

let retenues = Brut * 0.1;
let Net = Brut - retenues;

console.log(
    "Employé : " + nom + "\n" +
    "Salaire de base : " + Base + " DHS\n" +
    "Heures supplémentaires : " + montantHeuresSup + " DHS\n" +
    "Salaire brut : " + Brut + " DHS\n" +
    "Retenues : " + retenues + " DHS\n" +
    "Salaire net : " + Net + " DHS"
  );