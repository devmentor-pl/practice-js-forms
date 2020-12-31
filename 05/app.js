const REQUIRED_ERROR_MESSAGE = "To pole jest wymagane";
const NUMBER_ERROR_MESSAGE = "To pole jest wymagane";
const POSITIVE_NUMBER_ERROR_MESSAGE = "Podana wartość powinna być dodatnia";
const ZIP_CODE_ERROR_MESSAGE = "Wprowadź poprawny kod pocztowy np.\"52-690\"";

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
    markAllOK(formEl);
    validateRequiredFields(formEl.querySelectorAll('[required]'), errors);
    showMessages(errors);
}

function markAllOK(formEl) {
    const allOK = formEl.querySelectorAll('input, select');
    allOK.forEach((element) => {
        if(element.value !== "") {
            element.style.border = '2px solid #03a546';
        }
    })
}

function showMessages(errors) {
    const ulEl = document.querySelector('.messages');
    errors.forEach(function(err) {
        const {element, message} = err;
        const liEl = document.createElement('li');
        liEl.innerText = `${element.name} - ${message}` ;
        element.style.border = '2px solid red';
        ulEl.appendChild(liEl);
    })
}

function validateRequiredFields(fieldsList, errors) {
    fieldsList.forEach(function(element) {
        if(isEmpty(element.value)) {
            errors.push({
                element, //element: element,
                message: REQUIRED_ERROR_MESSAGE,
            });
        }
    })
}

function isEmpty(value) {
    return value === "";
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