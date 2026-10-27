// 1. Filtrer avec une boucle

for (let nombre = 1; nombre <= 20; nombre++) 
    if (nombre % 2 === 0){
    console.log(nombre);
};
console.log("Pause");

// 2. Calculer une somme (accumulateur)

let somme = 0;
for (let i = 1; i <= 10; i++) 
   somme = somme + i;{
}
console.log(somme);
console.log("Pause");

// 3. Synthèse : compter ET sommer ← Livrable

let compteur = 0;
let somme2 = 0;
for (let a = 1; a <= 20; a++) {
    if (a % 2 === 0) {
        somme2 = somme2 + a;
        compteur++; 
        }
};
console.log("Nombre de pairs : " + compteur);
console.log("Somme des pairs : " + somme2);