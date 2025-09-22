let button = document.getElementById('button1');
let modal = document.getElementById('modal');
let main = document.getElementById('main');

main.style.display = 'none'

button.addEventListener('click', function () {
    button.style.backgroundColor = 'red'
    modal.innerHTML = 'Modale'

    if (main.style.display == 'block') {
        main.style.display = 'none'
    } else {
        main.style.display = 'block'
    }
});

let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');

let rectangle = document.getElementById('rectangle');

button1.addEventListener('click', function() {
    rectangle.style.backgroundColor = 'green'
});
button2.addEventListener('click', function() {
    rectangle.style.backgroundColor = 'transparent'
});
button3.addEventListener('click', function() {
    rectangle.style.display = 'none'
});
button4.addEventListener('click', function() {
        rectangle.style.display = 'flex'
});