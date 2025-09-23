const submit = document.getElementById('submit');

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(color1.value);
    console.log(color2.value);
    console.log(color3.value);
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
        resultat.innerHTML = "les deux sont identiques";
    }
});

const number = document.getElementById('number');

number.addEventListener('blur', () => {
    if (number.value == "") {
        console.log('met un nombre stp');
        number.classList.add('vide');
    } else {
        number.classList.remove('vide');
    }
})
