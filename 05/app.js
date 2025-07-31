document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    const ulEl = document.querySelector('ul');

    if (formEl) {
        formEl.addEventListener('submit', validateData);
    }

    function validateData(e) {
        e.preventDefault();

        const errors = [];

        const fields = [
            {
                name: 'firstName',
                label: 'imię',
                required: true,
                pattern: '^[a-zA-Z –-]+$',
            },
            {
                name: 'lastName',
                label: 'nazwisko',
                required: true,
                pattern: '^[a-zA-Z –-]+$',
            },
            {
                name: 'street',
                label: 'ulica',
                required: true
            },
            {
                name: 'houseNumber',
                label: 'numer budynku',
                type: 'number',
                required: true,
            },
            {
                name: 'flatNumber',
                label: 'numer mieszkania',
                type: 'number'
            },
            {
                name: 'zip',
                label: 'kod pocztowy',
                pattern: '^[0-9]{2}-[0-9]{3}$',
                required: true,
            },
            {
                name: 'city',
                label: 'miasto',
                required: true,
                pattern: '^[a-zA-Z –-]+$',
            },
            {
                name: 'voivodeship',
                label: 'województwo',
                required: true
            }
        ];

        fields.forEach(function (field) {
            const value = formEl.elements[field.name].value;

            if (field.required) {
                if (value.length === 0) {
                    errors.push('Filling in the field ' + field.label + ' is required.');
                }
            }

            if (field.type === 'number') {
                if (Number.isNaN(Number(value))) {
                    errors.push(
                        'Field ' + field.label + ' has to have a numeric value.'
                    );
                }
            }

            if (field.pattern) {
                const reg = new RegExp(field.pattern);
                if (!reg.test(value)) {
                    errors.push(
                        'The field ' +
                        field.label +
                        ' contains incorrect input values.'
                    );
                }
            }
        });

        ulEl.innerHTML = '';
        if (errors.length === 0) {
            alert('The form has been submitted correctly!');

            fields.forEach(function (el) {
                formEl[el.name].value = '';
            });
        } else {
            errors.forEach(function (text) {
                const liEl = document.createElement('li');
                liEl.innerText = text;

                ulEl.appendChild(liEl);
            });
        }
    }
}