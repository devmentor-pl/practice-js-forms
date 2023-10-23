document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let errors = [];
        clearErrors();

        const emailInput = document.querySelector('input[name="login"]');
        const password1Input = document.querySelector('input[name="pass1"]');
        const password2Input = document.querySelector('input[name="pass2"]');
        const termsCheckbox = document.querySelector('input[name="accept"]');
        
        switch (true) {
            case !emailInput.value.includes('@'):
                errors.push('Email needs to contain @');
                markError(emailInput);
                break;
            case password1Input.value !== password2Input.value:
            case password1Input.value.length < 6:
                errors.push('Password needs to be at least 6 characters long and match');
                markError(password1Input);
                markError(password2Input);
                break;
            case !termsCheckbox.checked:
                errors.push('You need to accept terms and conditions');
                markError(termsCheckbox);
                break;
        }

        if (errors.length === 0) {
            console.log('done');
        } else {
            console.log(errors);
        };

        function markError(input) {
            input.previousElementSibling.style.color = 'red';
        }

        function clearErrors() {
            const labels = document.querySelectorAll('label');
            labels.forEach(label => label.style.color = 'initial');
        }
    });
});