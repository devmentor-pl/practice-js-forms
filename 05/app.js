const messages = document.querySelector('.messages');
const formEl = document.querySelector('form');

const formElements = [...formEl.elements];
let errors = [];




formEl.addEventListener('submit', checkValidity);

function checkValidity(e) {

    e.preventDefault();
    //Wyczyszczenie tablicy i listy przed ponowną walidacją
    errors = [];
    clearErrorsList(errors);

    for (input of formElements) {
        //Walidacja dla wszystkich pól
        validateEmpty(input);

        //Walidacja dla konkretnych pól
        if (input.name === 'houseNumber') {
            if (input.value < 1) {
                let error = 'Podaj prawidłowy numer domu';
                errors.push(error);
            }
        }

        if (input.name === 'zip') {
            const zipRegEx = /([0-9]{2}-[0-9]{3})/;
            if (!zipRegEx.test(input.value)) {
                let error = 'Podaj prawidłowy kod pocztowy';
                errors.push(error);
            }
        }
    }

    printErrors(errors);
}


//Sprawdzenia dla wszystkich
function validateEmpty(input) {
    if (input.value.length < 1 && input.type !== 'submit' && input.name !== 'flatNumber') {
        if (input.name === 'voivodeship') {
            let error = `Pole Województwo jest puste`
            errors.push(error);
        } else {
            let error = `Pole ${input.parentNode.textContent} jest puste`
            errors.push(error);
        }

    }
}


function printErrors(errors) {

    if (errors.length > 0) {
        errors.forEach(function (error) {
            const listEl = document.createElement('li');
            listEl.textContent = error;
            messages.appendChild(listEl);
        })
    } else {
        const listEl = document.createElement('li');
        listEl.style.color = 'green';
        listEl.textContent = 'Formularz wysłany prawidłowo';
        messages.appendChild(listEl);
    }
}

function clearErrorsList() {
    messages.textContent = '';
}