document.addEventListener('DOMContentLoaded', scripts);
function scripts() {
	const formEl = document.querySelector('form');
	const ulEl = document.querySelector('.messages');

	formEl.noValidate = true;
	if (formEl) {
		formEl.addEventListener('submit', handleCheck);
	}

	function handleCheck(e) {
		e.preventDefault();

		const errors = [];
		const inputs = [
			{
				name: 'firstName',
				label: 'Imię',
				required: true,
				pattern: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$',
			},
			{
				name: 'lastName',
				label: 'Naziwsko',
				required: true,
				pattern: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$',
			},
			{
				name: 'street',
				label: 'Ulica',
				required: true,
				pattern: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$',
			},
			{
				name: 'houseNumber',
				label: 'Numer budynku',
				required: true,
				type: 'Number',
			},
			{
				name: 'flatNumber',
				label: 'Numer mieszkania',
				required: true,
				type: 'Number',
			},
			{
				name: 'city',
				label: 'Miejscowość',
				required: true,
				type: 'Number',
			},
			{
				name: 'zip',
				label: 'Kod pocztowy',
				required: true,
				pattern: '^[0-9]{2}-[0-9]{3}$',
			},
			{
				name: 'voivodeship',
				label: 'Województwo',
				required: true,
			},
		];

		inputs.forEach(function (input) {
			const value = formEl.elements[input.name].value;

			if (input.required) {
				if (value.length === 0) {
					errors.push(`Dane w poli ${input.label} sa wymagane`);
				}
			}
			if (input.type === 'number') {
				if (isNaN(value)) {
					errors.push(`Dane w polu ${input.label} muszą być liczbą`);
				}
			}
			if (input.pattern) {
				const regex = new RegExp(input.pattern);
				if (!regex.test(value)) {
					errors.push(`Dane w polu ${input.label} są wypełnione nieprawidłowo`);
				}
			}
		});
		ulEl.innerHTML = '';
		if (errors.length === 0) {
			inputs.forEach(function (el) {
				formEl[el.name].value = '';
			});
			alert('Dane zostały wypełnione prawidłowo!');
		} else {
			errors.forEach(function (error) {
				const liElem = document.createElement('li');
				liElem.textContent = error;
				ulEl.append(liElem);
			});
		}
	}
}
