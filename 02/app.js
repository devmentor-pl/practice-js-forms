const checkDataFromUser = function () {
    const emailInput = document.getElementById('formLogin');
    const password1Input = document.getElementById('formPass1');
    const password2Input = document.getElementById('formPass2');
    const acceptRegulations = document.getElementById('formAccept');
    const errors = [];
    const labels = document.querySelectorAll('label');

    if (!emailInput.value.includes('@')) {
        errors.push(emailInput.previousElementSibling);
    };

    if (password1Input.value.length < 7) {
        errors.push(password1Input.previousElementSibling);
    };

    if ((password2Input.value !== password1Input.value) || password2Input.value === '') {
        errors.push(password2Input.previousElementSibling);
    };

    if (!acceptRegulations.checked) {
        errors.push(acceptRegulations.previousElementSibling);
    };

    labels.forEach(function (label) {
        label.setAttribute('style', 'color: black');
    });

    if (errors.length === 0) {
        console.log('done');
    } else {
        errors.forEach(function (error) {
            error.setAttribute('style', 'color: red');
        });
    };

};

const register = function () {
    const registerButton = document.querySelector('input[value="register"]');
    registerButton.addEventListener(
        'click',
        function (e) {
            e.preventDefault();
            checkDataFromUser();
        }
    );
};

document.addEventListener(
    'DOMContentLoaded',
    register
);