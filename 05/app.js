const formEl = document.querySelector('form');
formEl.noValidate = true;
formEl.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault();
    const errors = [];
    const errorsMessagesList = formEl.querySelector('.messages');
    errorsMessagesList.innerHTML = '';

    validateFirstName(e.target.elements.firstName.value, errors);
    validateLastName(e.target.elements.lastName.value, errors);
    validateStreet(e.target.elements.street.value, errors);
    validateHouseNumber(e.target.elements.houseNumber.value, errors);
    validateFlatNumber(e.target.elements.flatNumber.value, errors);
    validateZip(e.target.elements.zip.value, errors);
    validateCity(e.target.elements.city.value, errors);
    validateVoivodeship(e.target.elements.voivodeship.value, errors);
    
    if (errors.length > 0) {
        errors.forEach(function(el) {
            const errorMessageEl = document.createElement('li');
            errorMessageEl.innerText = el;
            errorsMessagesList.appendChild(errorMessageEl);
        });
    } else {
        alert('All details are correct'); 
    }
}

function validateFirstName(value, err) {
    const namePattern = /^[A-Z]{1}[a-z]*$/;

    if(!namePattern.test(value)) {
        err.push('First name is not correct');
    }
}

function validateLastName(value, err) {
    const namePattern = /^[A-Z]{1}[a-z]*$/;

    if(!namePattern.test(value)) {
        err.push('Last name is not correct');
    }
}

function validateStreet(value, err) {
    const streetAndCityPatern = /^[A-Z]{1}[a-z]*\s*[a-z]*\s*[a-z]*$/;

    if(!streetAndCityPatern.test(value)) {
        err.push('Street name is not correct');
    }
}

function validateHouseNumber(value, err) {
    if(Math.sign(value) !== 1) {
        err.push('House number is not correct');
    }
}

function validateFlatNumber(value, err) {
    if(Math.sign(value) !== 1) {
        err.push('Flat number is not correct');
    }
}

function validateZip(value, err) {
    const zipCodePatern = /[0-9]{2}-[0-9]{3}/;

    if(!zipCodePatern.test(value)) {
        err.push('Zip code is not correct');
    }
}

function validateCity(value, err) {
    const cityPattern = /^[A-Z]{1}[a-z]+ ?[a-z]*[a-z]{1}$/;

    if(!cityPattern.test(value)) {
        err.push('City is not correct');
    }
}

function validateVoivodeship(value, err) {
    if(value === '') {
        err.push('Voivodeship number is not correct');
    }
}