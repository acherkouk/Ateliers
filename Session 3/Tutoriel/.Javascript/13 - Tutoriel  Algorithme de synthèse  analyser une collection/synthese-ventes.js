let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let somme = 0;
let maximum = ventes[0];
let minimum = ventes[0];
let NombreExceptionnelles = 0;
let sommeExceptionnelles = 0;
for (let index = 0; index < ventes.length; index++) {
  if (maximum < ventes[index]) {
    maximum = ventes[index];
  }
  if (minimum > ventes[index]) {
    minimum = ventes[index];
  }
  somme = somme + ventes[index];
  if(ventes[index]>=130){
    NombreExceptionnelles++;
    sommeExceptionnelles = sommeExceptionnelles + ventes[index];
  }
}
console.log("Nombre de ventes :", ventes.length);
console.log("Chiffre d'affaires total :", somme);
console.log("Vente maximale :", maximum);
console.log("Vente minimale :", minimum);
console.log("Nombre de ventes exceptionnelles :", NombreExceptionnelles);
console.log("Somme des ventes exceptionnelles :", sommeExceptionnelles);