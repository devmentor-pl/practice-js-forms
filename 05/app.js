document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    const messagesList = document.querySelector('.messages');
    formEl.noValidate = true;

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const messages = [];

        const fields = [
            { name: 'firstName', label: 'Imię', required: true, },
            { name: 'lastName', label: 'Nazwisko', required: true, },
            { name: 'street', label: 'Ulica', required: true, },
            {
                name: 'houseNumber',
                label: 'Number budynku',
                type: 'number',
                required: true,
            },
            { name: 'flatNumber', label: 'Number mieszkania', type: 'number', },
            {
                name: 'zip',
                label: 'Kod pocztowy',
                pattern: '^[0-9]{2}(?:-[0-9]{3})?$',
                required: true,
                clear: true,
            },
            { name: 'city', label: 'Miasto', required: true, clear: true, },
            { name: 'voivodeship', label: 'Województwo', required: true, clear: true, },
        ];

        fields.forEach(function (field) {
            const value = formEl.elements[field.name].value;

            if (field.required) {
                if (value.length === 0) {
                    messages.push(`Dane w polu ${field.label} są wymagane.`);
                }
            }

            if (field.type === 'Number') {
                if (Number.isNaN(Number(value))) {
                    messages.push(`Dane w polu ${field.label} muszą być liczbą.`);
                }
            }

            if (field.pattern) {
                const reg = new RegExp(field.pattern);
                if (!reg.test(value)) {
                    messages.push(`Dane w polu ${field.label} zawierają niedozwolone znaki, lub nie są zgodne z przyjętym w Polsce wzorem.`);
                }
            }
        });


        messagesList.innerHTML = '';

        if (messages.length === 0) {
            alert('Dane zostały wypełnione prawidłowo!');

            fields.forEach(function (el) {
                if (!el.clear) {
                    formEl[el.name].value = '';
                }
            });
        } else {
            messages.forEach(function (message) {
                const listItem = document.createElement('li');
                listItem.innerText = message;

                messagesList.appendChild(listItem);
            });
        }
    }
}