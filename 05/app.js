const REQUIRED_ERROR_MESSAGE = "To pole jest wymagane";
const NUMBER_ERROR_MESSAGE = "To pole jest wymagane";
const ZIP_CODE_ERROR_MESSAGE = "Wprowadź poprawny kod pocztowy np.\"52-690\"";

const errorsMessages = [];

document.addEventListener('DOMContentLoaded', init);
function init() {
    console.log('.init()');
    
    const formEl = document.querySelector('form');
    formEl.noValidate = true;
    formEl.addEventListener('submit', validateAll);
}

function validateAll(event) {
    event.preventDefault();
    let errors = [];
    const formEl = event.currentTarget;
    isRequired(formEl, errors);
    isNumber(formEl, errors);
    isMatching(formEl, errors);
    colorErrors(errors);
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
            console.log(element.name + " - " + REQUIRED_ERROR_MESSAGE);
        }
        else {
            markOK(element);
        }
    })
}

function isNumber(formEl, errors) {
    const numberInputs = formEl.querySelectorAll('[type="number"]');
    numberInputs.forEach(function(element) {
        if(isNaN(element.value)) {
            errors.push(element.name);
            console.log(element.name + " - " + NUMBER_ERROR_MESSAGE);
        }
        else if(element.value !== "" && !isNaN(element.value)) {
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