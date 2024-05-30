document.addEventListener('DOMContentLoaded', init)

let form;
let messages = [];

function init() {
    form = document.forms[0];
    addNovalidate();
    form.addEventListener('submit', validate)
    console.log(messages)
}

function addNovalidate() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function (element) {
        element.setAttribute('novalidate', '')
        element.removeAttribute('required');
    })

    const select = document.querySelector('select')
    select.removeAttribute('required');
    select.setAttribute('novalidate', '');
}

function validate(e) {
    console.log('Validating...');
    e.preventDefault();
    validateName(form[0].value.trim(), 'First name');
    validateName(form[1].value.trim(), 'Last name');
    validateStreet(form[2].value.trim());
    validateHouseOrFlatNumber(form[3].value.trim(), 'House number');
    validateHouseOrFlatNumber(form[4].value.trim(), 'Flat number');
    validateCity(form[6].value.trim());
    
}

function validateName(name, nameType) {
    const regex = /^[A-Z][a-z]{2,}$/g;
    if (name.length === 0) {
        messages.push(nameType + ' not inputted');
    } else if (!regex.test(name)) {
        messages.push(nameType + ' invalid: ' + name);
    } else {
        console.log(nameType + ' ok');
    }
}

function validateStreet(streetName) {
    const regex = /\w+/g
    if (streetName.length === 0) {
        messages.push('Street name not inputted');
    } else if (!regex.test(streetName)) {
        messages.push('Street name invalid: ' + streetName);
    } else {
        console.log('Street name ok');
    }
}

function validateHouseOrFlatNumber(number, numberType) {
    const regex = /^\d{1,4}$/g
    if(number.length === 0) {
        messages.push(numberType + ' not inputted');
    } else if (!regex.test(number)) {
        messages.push(numberType + ' invalid');
    } else {
        console.log(numberType + ' ok');
    }

}

function validateCity(name) {
    const regex = /^([a-z]+[ ]?)+$/i
    if (name.length === 0) {
        messages.push('City name not inputted');
    } else if (!regex.test(name)) {
        messages.push('City name invalid: ' + name);
    } else {
        console.log('City name ok');
    }
}