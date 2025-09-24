const submit = document.getElementById('submit');

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');

const resultatCouleur = document.getElementById('resultatCouleur')

submit.addEventListener('click', (e) => {
    e.preventDefault();

    resultatCouleur.innerHTML = "your first color is " + color1.value + ", your second is " + color2.value + " and your third is " + color3.value
});

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const button = document.getElementById('button');
const resultat = document.getElementById('resultat');

button.addEventListener('click', () => {

    if (number1.value > number2.value) {
        resultat.innerHTML = "number 1 is the greatest";
    } else if (number2.value > number1.value) {
        resultat.innerHTML = "number 2 is the greatest";
    } else {
        resultat.innerHTML = "why trying to compare with the same thing ?";
    }
});

const number = document.getElementById('number');
const noNumber = document.getElementById('noNumber')

number.addEventListener('blur', () => {
    if (number.value == "") {
        noNumber.innerHTML = 'met un nombre stp';
        number.classList.add('vide');
    } else {
        noNumber.innerHTML = '';
        number.classList.remove('vide');
    }
})
