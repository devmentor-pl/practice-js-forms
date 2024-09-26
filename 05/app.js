const form = document.querySelector('form');
const messages  = document.querySelector('.messages');

const formEl = [...form.elements];
const houseNumber = form.elements.houseNumber;
const name = form.elements.firstName;
const surname = form.elements.lastName;


let errors = [];

form.addEventListener('submit', validation);


function validation(e) {
    e.preventDefault();
    errors = [];
    clearInputs(errors);

    for(input of formEl) {
        checkIfEmpty(input)
    }
    if(houseNumber.value.length === 0 || Number(houseNumber.value) <= 0) {
        let error = 'Podaj poprawny numer domu';
        errors.push(error);
    }
    if (input.name === 'zip') {
        const zipRegEx = /([0-9]{2}-[0-9]{3})/;
        if (!zipRegEx.test(input.value)) {
            let error = 'Podaj prawidłowy kod pocztowy';
            errors.push(error);
        }
}
showErrors(errors);
}


function checkIfEmpty(input) {
    if (input.value.length < 1 && input.type !== 'submit' && input.name !== 'flatNumber' 
    && input.name !== 'firstName' && input.name !== 'lastName') {
        if (input.name === 'voivodeship') {
            let error = `Pole Województwo jest puste`
            errors.push(error);
        } 
        else {
            let error = `Pole ${input.parentNode.textContent} jest puste`
            errors.push(error);
        }
    }
    if (input.name === 'firstName') {
        if (input.value.length <= 1) {
        let error = `Podaj pełne imię`;
        errors.push(error);
    }}
    if (input.name === 'lastName') {
        if (input.value.length <= 1) {
        let error = `Podaj pełne nazwisko`;
        errors.push(error);
    }}
}
function showErrors(errors) {
    if (errors.length > 0) {
        errors.forEach(function (error) {
            const list = document.createElement('li');
            list.textContent = error;
            messages.appendChild(list);
        })
    } else {
        const list = document.createElement('li');
        list.style.color = 'green';
        list.textContent = 'Formularz wysłany';
        messages.appendChild(list);
    }
}


function clearInputs() {
    messages.textContent = '';
}
