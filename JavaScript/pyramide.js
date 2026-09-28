let ligneTexte = "";
for (let e = 1; e <= 5; e++) {
    ligneTexte = ligneTexte + "*";
}
console.log(ligneTexte); 

for (let ligne = 1; ligne <= 5; ligne++) {
    let ligneTexte = "";
    for (let e = 1; e <= ligne; e++) {   // "ligne" étoiles
        ligneTexte = ligneTexte + "*";
    }
    console.log(ligneTexte);
}

for (let ligne = 1; ligne <= 5; ligne++) {
    let ligneTexte = "";
    // Espaces
    for (let s = 1; s <= 5 - ligne; s++) {
        ligneTexte = ligneTexte + " ";
    }
    // Étoiles
    for (let e = 1; e <= (2 * ligne) - 1; e++) {
        ligneTexte = ligneTexte + "*";
    }
    console.log(ligneTexte);
}

let hauteur = 5;

if (hauteur > 0) {
    for (let ligne = 1; ligne <= hauteur; ligne++) {
        let ligneTexte = "";
        for (let s = 1; s <= hauteur - ligne; s++) {
            ligneTexte = ligneTexte + " ";
        }
        for (let e = 1; e <= (2 * ligne) - 1; e++) {
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur invalide.");
}

let hauteur2 = 7;

if (hauteur2 > 0) {
    for (let ligne = 1; ligne <= hauteur2; ligne++) {
        let ligneTexte = "";
        for (let s = 1; s <= hauteur2 - ligne; s++) {
            ligneTexte = ligneTexte + " ";
        }
        for (let e = 1; e <= (2 * ligne) - 1; e++) {
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur invalide.");
}

let hauteur3 = 3;

if (hauteur3 > 0) {
    for (let ligne = 1; ligne <= hauteur3; ligne++) {
        let ligneTexte = "";
        for (let s = 1; s <= hauteur3 - ligne; s++) {
            ligneTexte = ligneTexte + " ";
        }
        for (let e = 1; e <= (2 * ligne) - 1; e++) {
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur invalide.");
}

let hauteur4 = 0;

if (hauteur4 > 0) {
    for (let ligne = 1; ligne <= hauteur4; ligne++) {
        let ligneTexte = "";
        for (let s = 1; s <= hauteur4 - ligne; s++) {
            ligneTexte = ligneTexte + " ";
        }
        for (let e = 1; e <= (2 * ligne) - 1; e++) {
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur invalide.");
}