const formEl = document.querySelector('form')
const messages = document.querySelector('ul');
formEl.addEventListener('submit', checkData);

function checkData(e) {
	e.preventDefault();

	const arr = [
		{name: 'firstName', label: 'Imię', required: true},
		{name: 'lastName', label: 'Nazwisko', required: true},
		{name: 'street', label: 'ulica', required: true},
		{name: 'houseNumber', label: 'Numer budynku', type: 'number', required: true},
		{name: 'flatNumber', label: 'Numer mieszkania', type: 'number', required: true},
		{name: 'zip', label: 'Kod pocztowy', pattern: "[0-9]{2}-[0-9]{3}", required: true}, 
		{name: 'city', label: 'Miasto', required: true},
		{name: 'voivodeship', label: 'Województwo', required: true},
	]

    const errors = [];

    arr.forEach(function (item) {
        const value = formEl.elements[item.name].value;

        if (item.required) {
            if (value.length === 0) {
                errors.push('Pole ' + item.label + ' są wymagane.');
            }
        }

        if (item.type === 'number') {
            if (Number.isNaN(Number(value))) {
                errors.push(
                    'Dane w ' + item.label + ' muszą być liczbą.'
                );
            }
        }

        if (item.pattern) {
            const reg = new RegExp(item.pattern);
            if (!reg.test(value)) {
                errors.push(
                    'Pole ' + item.label + ' zawiera niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.'
                );
            }
        }
    });

    messages.innerHTML = '';
    if (errors.length === 0) {
        alert('Formularz wysłany');

        arr.forEach(function (el) {
            formEl[el.name].value = '';
        });
    } else {
        errors.forEach(function (text) {
            const liEl = document.createElement('li');
            liEl.innerText = text;

            messages.appendChild(liEl);
        });
    }
}

