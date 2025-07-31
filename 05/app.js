document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const messagesList = document.querySelector('.messages');

    const validations = {
        'firstName': {
            test: value => value.trim() !== '',
            errorMsg: 'Proszę wprowadzić imię.'
        },
        'lastName': {
            test: value => value.trim() !== '',
            errorMsg: 'Proszę wprowadzić nazwisko.'
        },
        'street': {
            test: value => value.trim() !== '',
            errorMsg: 'Proszę wprowadzić nazwę ulicy.'
        },
        'houseNumber': {
            test: value => value.trim() !== '',
            errorMsg: 'Proszę wprowadzić numer domu.'
        },
        'flatNumber': {
            test: value => value.trim() !== '',
            errorMsg: 'Proszę wprowadzić numer mieszkania.'
        },
        'zip': {
            test: value => /^[0-9]{2}-[0-9]{3}$/.test(value),
            errorMsg: 'Proszę wprowadzić prawidłowy kod pocztowy (format: 00-000).'
        },
        'city': {
            test: value => value.trim() !== '',
            errorMsg: 'Proszę wprowadzić nazwę miasta.'
        },
        'voivodeship': {
            test: value => value.trim() !== '',
            errorMsg: 'Proszę wybrać województwo.'
        }
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        messagesList.innerHTML = '';

        const errors = validateForm(form, validations);
        if (errors.length) {
            errors.forEach(error => {
                messagesList.innerHTML += `<li>${error}</li>`;
            });
        } else {
            messagesList.innerHTML = '<li>Dane zostały wysłane prawidłowo!</li>';
        }
    });
});

function validateForm(form, validations) {
    const errors = [];

    for (const inputName in validations) {
        const inputValue = form.querySelector(`[name="${inputName}"]`).value;
        if (!validations[inputName].test(inputValue)) {
            errors.push(validations[inputName].errorMsg);
        }
    }

    return errors;
}