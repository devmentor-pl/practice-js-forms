document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    const messagesList = document.querySelector('.messages');
    formEl.noValidate = true;

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)
    }

    const fields = [
        { name: 'firstName', label: 'Imię', required: true, pattern: '^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ –-]+$', },
        { name: 'lastName', label: 'Nazwisko', required: true, pattern: '^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ–-]+$', },
        { name: 'mobileNumber', label: 'Numer telefonu komórkowego', type: 'number', required: true, pattern: '^[1-9][0-9]{8}$', },
        { name: 'street', label: 'Ulica', required: true, },
        {
            name: 'houseNumber',
            label: 'Numer budynku',
            required: true,
            // W regexr (https://regexr.com/7623l) przykładowe 120A działa poprawnie, tak samo walidator z JS działa poprawnie, a formularz wbudowany w przeglądarkę sypie błędem :/
            pattern: '^[1-9]\d*(?:[ -]?(?:[a-zA-Z]+|[0-9]\d*))?',
        },
        { name: 'flatNumber', label: 'Numer mieszkania', pattern: '^[1-9]\d*(?:[ -]?(?:[a-zA-Z]+|[1-9]\d*))?', },
        {
            name: 'zip',
            label: 'Kod pocztowy',
            pattern: '^[0-9]{2}(?:-[0-9]{3})?$',
            required: true,
            clear: true,
        },
        { name: 'city', label: 'Miasto', required: true, clear: true, pattern: '^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ–-]+$', },
        { name: 'voivodeship', label: 'Województwo', required: true, clear: true, },
        { type: 'submit', value: 'Wyślij', validate: false, parent: false, },
        { type: 'button', value: 'Reset', validate: false, parent: false, },
    ];

    function handleSubmit(e) {
        e.preventDefault();

        const messages = [];

        fields.forEach(function (field) {
            const { name, label, value = false, required = false, type = 'text', pattern, clear = false, validate = true, parent = true, } = field;

            if (validate) {
                const inputValue = formEl.elements[name].value;

                if (required) {
                    if (inputValue.length === 0) {
                        messages.push(`Dane w polu ${label} są wymagane.`);
                    }
                }

                if (type === 'Number') {
                    if (Number.isNaN(Number(inputValue))) {
                        messages.push(`Dane w polu ${label} muszą być liczbą.`);
                    }
                }

                if (inputValue.length > 0 && pattern) {
                    const reg = new RegExp(pattern);
                    if (!reg.test(inputValue)) {
                        messages.push(`Dane w polu ${label} są niepoprawne.`);
                    }
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

    // Create new form based on fields objects array
    const newForm = document.createElement('form');

    setAttributes(newForm, {
        'action': true, 'method': 'post',
    })

    newForm.addEventListener('submit', handleSubmit);

    fields.forEach(function (field) {
        const { name, label, value = false, required = false, type = 'text', pattern, clear, parent = true, } = field;

        // Dla każdego elementu tablicy (field):
        // utwórz element <label>
        // dodaj do <label> innerText z właściwości name
        // utwórz element <input>
        // dodaj do <input> atrybuty z odpowiednimi wartościami (reszta właściwości obiektu)
        // dodaj <input> do jego rodzica: <label>
        // nieobowiązkowo: stwórz <div> i wstaw tam <label> jako dziecko
        // dodaj <div> lub <label> (zależy, na co się zdecydowałeś) do rodzica: <form>

        const labelEl = document.createElement('label');
        const inputEl = document.createElement('input');
        const divEl = document.createElement('div');

        setAttributes(inputEl, { name, type, pattern, value, required });
        if (parent) {
            labelEl.innerText = label + ' ';
            labelEl.appendChild(inputEl);
            divEl.appendChild(labelEl);
        } else {
            divEl.appendChild(inputEl);
        }

        newForm.appendChild(divEl);
    });

    // dodaj element <form> do drzewa DOM

    // Add form to DOM
    document.body.insertBefore(newForm, formEl);

    const createTitle = function (content) {
        const title = document.createElement('h2');
        title.innerText = `${content} form:`;

        return title;
    }

    // Add JS form title
    document.body.insertBefore(createTitle('JS'), newForm);

    // Add HTML form title
    document.body.insertBefore(createTitle('HTML'), formEl);
}

function setAttributes(el, attrs) {
    for (const key in attrs) {
        // console.log(attrs[key])
        if (typeof attrs[key] !== 'undefined' && typeof attrs[key] !== 'boolean') {
            el.setAttribute(key, attrs[key]);
        } else if (attrs[key] === true) {
            el.setAttribute(key, '');
        }
    }
}