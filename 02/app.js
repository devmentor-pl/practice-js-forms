const formEl = document.querySelector('form');
const loginEl = document.getElementById('formLogin');
const pass1El = document.getElementById('formPass1');
const pass2El = document.getElementById('formPass2');
const acceptEl = document.getElementById('formAccept');
const formElements = [...formEl.elements];

formEl.addEventListener('submit', sendInputs);

let errors = [];

function sendInputs(e) {

    errors = [];

    e.preventDefault();

    formElements.forEach(checkValid);

    if (errors.length === 0) {
        console.log('done');
        loginEl.value = '';
        pass1El.value = '';
        pass2El.value = '';
        acceptEl.checked = false;
    } else {
        errors.forEach(function (errorEl) {
            errorEl.previousElementSibling.style.color = 'red';
        })
    }
}

function checkValid(input) {
    if (input.id === 'formLogin') {
        checkLogin();
    }

    if (input.id === 'formPass1') {
        checkPasswords();
    }

    if (input.id === 'formAccept') {
        checkAccept();
    }
}

function checkLogin() {
    if (!loginEl.value.includes('@') || loginEl.value.length < 4) {
        errors.push(loginEl);
    } else {
        clearError(loginEl);
    }
}

function checkPasswords() {
    if (pass1El.value !== pass2El.value || pass1El.value.length < 6 || pass2El.value.length < 6) {
        errors.push(pass1El);
        errors.push(pass2El);
    } else {
        clearError(pass1El);
        clearError(pass2El);
    }
}

function checkAccept() {
    if (!acceptEl.checked) {
        errors.push(acceptEl);
    } else {
        clearError(acceptEl);
    }
}


function clearError(element) {
    element.previousElementSibling.style.color = '';
}