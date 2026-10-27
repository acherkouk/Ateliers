console.log(10 > 5); // Affiche true

console.log(10 < 5);

console.log(10 === 10);
console.log(10 !== 5);
console.log(10 > 5);
console.log(3 < 8);
console.log(18 >= 18);
console.log(15 <= 20);

let age = 20;
console.log(age >= 18);

let estMajeur = age >= 18;
console.log(estMajeur);

let autorisation = true;
let acces = age >= 18 && autorisation === true;
console.log(acces);

let membre = false;
let invitation = true;
let entree = membre === true || invitation === true;
console.log(entree);

let disponible = true;
console.log(!disponible);