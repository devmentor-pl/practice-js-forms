const formEl = document.querySelector('form');

const inputsList = document.querySelectorAll('input');

const errors = [];


const inputEmailEl = formEl.elements[0];
const inputPassword1El = formEl.elements[1];
const inputPassword2El = formEl.elements[2];
const regulationsEl = formEl.elements[3];




formEl.addEventListener('submit', function (event) {

    event.preventDefault();

    if (inputEmailEl.value === '' || !inputEmailEl.value.includes('@')) {
        errors.push(inputEmailEl);

    }

    if (inputPassword1El.value.length < 6 || inputPassword1El.value === '') {
        errors.push(inputPassword1El);
        errors.push(inputPassword2El);
        alert('Hasło musi składać się z min 6 znaków.')


    }

    if (inputPassword1El.value !== inputPassword2El.value || inputPassword2El.value === '') {
        errors.push(inputPassword2El);
    }


    if (regulationsEl.checked === false) {
        errors.push(regulationsEl);
    }



    if (errors.length === 0) {

        event.preventDefault();
        console.log('DONE!')
        inputsList.forEach(function (element) {
            element.parentElement.style.color = 'green';
        });
    }
    else {
        errors.forEach(function (element) {
            element.parentElement.style.color = 'red';
        });
        alert('Źle wypełniony formularz.')
    }


});


