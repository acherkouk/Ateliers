// Exercice 1

let couleur = 0
let rouge = 1
let jaune = 2
let vert = 3
if (couleur === rouge) {
    console.log("Arrêtez-vous");
} else if (couleur === jaune) {
    console.log("Ralentissez");
} else if (couleur === vert) {
    console.log("Vous pouvez passer");
} else  {
    console.log("Couleur invalide");
};

// Exercice 2

const prompt = require("prompt-sync")();
let solde = prompt("Entrez votre solde actuel :");
let montant = prompt("Entrez le montant à retirer :");
if (montant > 0 && montant <= solde) {
        let NewSolde = solde - montant;
        console.log("Transaction acceptée. Nouveau solde : " + NewSolde);
    } else {
        console.log("transaction refusée !!");
    };

// Exercice 3

const prompt2 = require("prompt-sync")();
let montant2 = Number(prompt2("Donner le montant des achats :"));
let carte = prompt2(" Est ce que vous avez une carte de fidélité ?");
if ( montant2 >= 500 || carte === "oui"){
    montant2 = montant2 - (montant2 * 0.2);
    console.log("Le montant à payer est :",montant2);
}else{
    console.log("le montant à payer est:",montant2)
}

// Exercice 4

const prompt3 = require("prompt-sync")();
let a = Number(prompt3("Donner un nombre de a :"));
let b = Number(prompt3("Donner un nombre de b :"));
let c = Number(prompt3("Donner un nombre de c :"));
if ( a > b && a > c){
    console.log (" le maximum est : ", a);
}else if ( c > b && c > a){
    console.log("le maximum est:",c);
}else{
    console.log ( "le maximum est :",b)
}