// Exercice 1

let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let somme = 0

tableau.forEach((n) => {
    somme = somme + n
});

console.log(somme);

// Exercice 2

tableau.forEach((n, i) => {
    console.log("La note n°" + i + " est " + n)
});

// Exercice 3

diviseur = tableau.length;
moyenne = somme/diviseur;

console.log(moyenne)

// filtered array

const filtered = tableau.filter((n) => n > 5);
console.log(filtered);

// reduced array

const reduced = tableau.reduce((somme, n) => {
    return somme * n;
});

console.log(reduced);

// find item

const found = tableau.find((n) => n < 6 && n > 4);

console.log(found);

// find index

const Indexfound = tableau.findIndex((n) => n < 9 && n > 7);

console.log(Indexfound);

// some

const some = tableau.some((n) => n > 7);

console.log(some);

// every 

const every = tableau.every((n) => n > 1);

console.log(every);

// spread

let tableau2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let tableau3 = [...tableau, ...tableau2];

console.log(tableau3);

// destrcuturing

const[a, b, c, d, e, f, g, h, i ,j] = tableau

console.log(c);

// default parameters

function multiplication (a = 0, b = 0) {
    let multiplicated = a*b
    console.log(multiplicated);
}

multiplication(3, 5);
multiplication(3);
multiplication();

// tri croissant

const tableauNul = [7, 6, 9, 2, 4, 1]

console.log(tableauNul.sort());