const form = document.querySelector('form');
const login = document.getElementById('formLogin');
const pass1 = document.getElementById('formPass1');
const pass2 = document.getElementById('formPass2');
const accept = document.getElementById('formAccept');
const formInputs = [...form.elements];
console.log(formInputs);

form.addEventListener('submit', sendForm);

let errors = [];


function sendForm(e) {
    errors = [];
    e.preventDefault();
    formInputs.forEach(Validation);

    if (errors.length === 0) {
        console.log('done');
        window.confirm('Your form has been sent');
    } else {
        errors.forEach(function (error) {
            error.previousElementSibling.style.color = 'red';
        })
    }
    clearInputs();
}

function isMailCorrect() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!login.value.includes('@') || login.value.length < 4 || !login.value.match(emailRegex)) {
        errors.push(login);
        console.log('email contains errors')
    } else {
        errorsReset(login);
    }
}

function isPasswordCorrect() {
    if(pass1.value !== pass2.value || pass1.value.length < 6 || pass2.value.length < 6 ) {
        errors.push(pass1);
        errors.push(pass2);
        console.log('The passwords are not correct')
    } else {
        errorsReset(pass1);
        errorsReset(pass2);
    }
}

function isCheckboxChecked() {
    if(!accept.checked) {
        errors.push(accept);
        console.log('The checkbox is not checked');
    } else {
        errorsReset(accept);
    }
}

function errorsReset(el) {
    el.previousElementSibling.style.color = '';
}

function clearInputs() {
    login.value = '';
    pass1.value = '';
    pass2.value = '';
}


function Validation(input) {
    if(input.id === 'formLogin') {
        isMailCorrect();
    }
    if(input.id === 'formPass1') {
        isPasswordCorrect();
    }
    if(input.id === 'formAccept') {
        isCheckboxChecked();
    }
}