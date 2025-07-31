const form = document.querySelector('form');
let errors = [];

function isEmailCorrect(inputTarget) {
    inputTarget.value.includes('@') ? inputTarget.previousElementSibling.style.color = 'black' : errors.push(inputTarget);
};

function isPasswordCorrect(pass1, pass2) {
    if (pass1.value.length > 6 && pass1.value === pass2.value) {
        pass1.previousElementSibling.style.color = 'black';
        pass2.previousElementSibling.style.color = 'black';
    }else errors.push(pass1, pass2);
};

function isChecked(inputTarget) {
    inputTarget.checked === true ? inputTarget.previousElementSibling.style.color = 'black' : errors.push(inputTarget);
};

function showError(errors) {
    errors.forEach(function (el) {
        return el.previousElementSibling.style.color = 'red';
    });
};

function clearErrors(arrErrors) {
    arrErrors.length = 0;
};

const validationForm = function (e) {
    e.preventDefault();
    clearErrors(errors);
    const [email, firstPassword, secondPassword, checkbox] = this.elements;
    isEmailCorrect(email);
    isPasswordCorrect(firstPassword, secondPassword);
    isChecked(checkbox);
    errors.length > 0 ? showError(errors) : console.log('done');
};

form.addEventListener('submit', validationForm);