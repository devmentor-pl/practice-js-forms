const formEl = document.querySelector('form');
const inputFirstName = document.querySelector('input[name="firstName"]');
const inputLastName = document.querySelector('input[name="lastName"]');
const inputStreet = document.querySelector('input[name="street"]');
const inputHouseNumber = document.querySelector('input[name="houseNumber"]');
const inputFlatNumber = document.querySelector('input[name="flatNumber"]');
const inputZipNumber = document.querySelector('input[name="zip"]');
const inputCity = document.querySelector('input[name="city"]');
const selectVoivodeshipList = document.querySelector('select[name="voivodeship"]');
const ulList = document.querySelector('.messages');

formEl.addEventListener('submit', inputValidation);

function createLiElementAndAppend(message) {
    const liElement = document.createElement('li');
    liElement.textContent = message;
    ulList.appendChild(liElement);
}

function inputValidation(e) {
    e.preventDefault();
    ulList.textContent = '';

    let isValid = true; 

    // First Name Validation
    if (!inputFirstName.value || /\d/.test(inputFirstName.value)) {
        createLiElementAndAppend('You entered an invalid first name.');
        isValid = false;
    }

    // Last Name Validation
    if (!inputLastName.value || /\d/.test(inputLastName.value)) {
        createLiElementAndAppend('You entered an invalid last name.');
        isValid = false;
    }

    // Street Validation
    if (!inputStreet.value || /\d/.test(inputStreet.value)) {
        createLiElementAndAppend('You entered an invalid street name.');
        isValid = false;
    }

    // House Number Validation
    if (!inputHouseNumber.value || isNaN(inputHouseNumber.value)) {
        createLiElementAndAppend('You entered an invalid house number.');
        isValid = false;
    }

    // Flat Number Validation
    if (inputFlatNumber.value && isNaN(inputFlatNumber.value)) {
        createLiElementAndAppend('You entered an invalid flat number.');
        isValid = false;
    }

    // House Number and Flat Number Conflict
    if (inputHouseNumber.value && inputFlatNumber.value) {
        createLiElementAndAppend('You cannot enter both house number and flat number.');
        isValid = false;
    }

    // Zip Code Validation
    const zipPattern = /^[0-9]{2}-[0-9]{3}$/;
    if (!zipPattern.test(inputZipNumber.value)) {
        createLiElementAndAppend('You entered an invalid zip code.');
        isValid = false;
    }

    // City Validation
    if (/\d/.test(inputCity.value)) {
        createLiElementAndAppend('You entered an invalid city name.');
        isValid = false;
    }

    // Voivodeship Validation
    if (!selectVoivodeshipList.value) {
        createLiElementAndAppend('You have not selected a voivodeship.');
        isValid = false;
    }

    // If everything is valid, show success message
    if (isValid) {
        createLiElementAndAppend('Data has been successfully submitted.');
    }
}
