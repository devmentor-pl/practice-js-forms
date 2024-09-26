const init = function () {
    const formEl = document.querySelector('form');
    const messages = document.querySelector('.messages');
    if (formEl) {
        formEl.addEventListener('submit', handleSubmit);
    };

    const displayMessages = function (errors) {
        errors.forEach(function (error) {
            const message = document.createElement('li');
            message.innerText = error;
            messages.appendChild(message);
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const inputFields = [
            { name: 'firstName', label: "Imię", required: true },
            { name: 'lastName', label: "Nazwisko", required: true },
            { name: 'street', label: "Ulica", required: true },
            { name: 'houseNumber', label: "Numer budynku", type: 'number', required: true },
            { name: 'flatNumber', label: "Numer mieszkania", type: 'number', required: true },
            { name: 'zip', label: "Kod pocztowy", pattern: '[0-9]{2}-[0-9]{3}', required: true },
            { name: 'city', label: "Miejscowość", required: true },
            { name: 'voivodeship', label: "Województwo", required: true },
        ]

        const errors = [];

        inputFields.forEach(function (field) {
            const value = formEl.elements[field.name].value;

            if (field.required && value.length === 0) {
                errors.push('The "' + field.label + '" field is required.')
            };
            if (field.type === 'number') {
                if (Number.isNaN(Number(value))) {
                    errors.push('The data in the "' + field.label + '" field must be a number.')
                } else if (value < 1) {
                    errors.push('The data in the "' + field.label + '" field is incorrect.')
                };
            };
            if (field.pattern) {
                const reg = new RegExp(field.pattern);
                if (!reg.test(value)) {
                    errors.push('The data in the "' + field.label + '" field does not match the following formula: xx-xxx.')
                };
            };
        });

        messages.innerHTML = '';
        if (errors.length === 0) {
            alert('The data has been successfully sent!');
        } else {
            displayMessages(errors);
        };
    };
};

document.addEventListener(
    'DOMContentLoaded',
    init
);