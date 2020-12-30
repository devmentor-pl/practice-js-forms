const REQUIRED_ERROR_MESSAGE = "To pole jest wymagane";
const NUMBER_ERROR_MESSAGE = "To pole jest wymagane";
const POSITIVE_NUMBER_ERROR_MESSAGE = "Podana wartość powinna być dodatnia";
const ZIP_CODE_ERROR_MESSAGE = "Wprowadź poprawny kod pocztowy np.\"52-690\"";

const errorMessages = [];

document.addEventListener('DOMContentLoaded', init);
function init() {
    // console.log('.init()');

    const formEl = document.querySelector('form');
    formEl.noValidate = true;
    formEl.addEventListener('submit', validateAll);
}

function validateAll(event) {
    event.preventDefault();
    let errors = [];
    const formEl = event.currentTarget;
    isRequired(formEl, errors);
    isPositiveNumber(formEl, errors);
    isMatching(formEl, errors);
    colorErrors(errors);
    addToMessages();
}

function addToMessages() {
    errorMessages.forEach(function(message) {
        const liEl = document.createElement('li');
        liEl.innerText = message;
        document.querySelector('.messages').appendChild(liEl);
        //wiem, że to jest brzydko, bo zamiast wszystko na raz wcisnąć to ciągle się odwołuję, ale już nie mam pomysłu. (albo sił
    })
    errorMessages.length = 0;
}

function colorErrors(errors) {
    errors.forEach(function(name) {
        element = document.querySelector(`[name=${name}`);
        if(element) {
            element.style.border = '2px solid red';
        }
    });
    errors.length = 0;
}

function isRequired(formEl, errors) {
    const requiredInputs = formEl.querySelectorAll('[required]');
    requiredInputs.forEach(function(element) {
        if(element.value === "") {
            errors.push(element.name);
            errorMessages.push(element.name + " - " + REQUIRED_ERROR_MESSAGE);
        }
        else {
            markOK(element);
        }
    })
}

function isPositiveNumber(formEl, errors) {
    const numberInputs = formEl.querySelectorAll('[type="number"]');
    numberInputs.forEach(function(element) {
        if(isNaN(element.value)) {
            errors.push(element.name);
            errorMessages.push(element.name + " - " + NUMBER_ERROR_MESSAGE);
        }
        else if(element.value <= 0) {
            errors.push(element.name);
            errorMessages.push(element.name + " - " + POSITIVE_NUMBER_ERROR_MESSAGE);
        }
        if(element.value !== "") {
            markOK(element);
        }
    })
}

function isMatching(formEl, errors) {
    const patternInputs = formEl.querySelectorAll('[pattern]');
    patternInputs.forEach(function(element) {
        if(element.value !== "" && !element.value.match(element.pattern)) {
            errors.push(element.name);
            console.log(element.name + " - " + ZIP_CODE_ERROR_MESSAGE);
        }
        else if(element.value.match(element.pattern)) {
            markOK(element);
        }
    })
}

function markOK(element) {
    element.style.border = '2px solid #03a546';
}