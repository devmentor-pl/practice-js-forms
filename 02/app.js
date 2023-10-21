document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let errors = [];

        const emailInput = document.querySelector('input[name="login"]');
        const password1Input = document.querySelector('input[name="pass1"]');
        const password2Input = document.querySelector('input[name="pass2"]');
        const termsCheckbox = document.querySelector('input[name="accept"]');
        console.log(emailInput.value);
        console.log(password1Input.value);
        console.log(password2Input.value);
        console.log(termsCheckbox.checked);
    });
});