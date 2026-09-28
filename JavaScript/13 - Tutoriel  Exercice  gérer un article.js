const prompt = require("prompt-sync")();
let article = prompt("Bienvenue, que puis-je vous offrir ? ");
let prix = 7;
console.log(article, "? Cela ferait", prix, "DH");
let quantite = prompt("Combien en voulez-vous ? ");
let total = prix * quantite;
console.log("Cela ferait", total, "DH");