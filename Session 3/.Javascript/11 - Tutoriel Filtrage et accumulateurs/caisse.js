// Exercice 1
let mots = ["Chat", "Ordinateur", "table", "programation", "js"];
let motsLongs = 0;
for (let i = 0; i < mots.length; i++) {
    console.log(mots[i], "=>", mots[i].length);
    if (mots[i].length > 5) {
        motsLongs++;
    }
}
console.log("Nombre de mots longs :", motsLongs);
// Exercice 2
let nombres = [4, 7, 2, 9, 5, 8]
let sommePairs = 0;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
        sommePairs = sommePairs + nombres[i];
    }
}
console.log("Somme des nombres pairs :", sommePairs);
// Exercice 3
let panier = [15, 42, 5, 89, 12, 50, 8];
let sommePanier = 0;
let panierCher = 0;
let panierCher2 = 0;
for (let i = 0; i < panier.length; i++) {
    sommePanier = sommePanier + panier[i];
    if (panier[i] >= 20) {
        panierCher++;
        panierCher2 = panierCher2 + panier[i];
    }
}
console.log("Somme du panier :", sommePanier);
console.log("Nombre d'articles chers :", panierCher);
console.log("Montant des articles chers :", panierCher2);