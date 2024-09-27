document.addEventListener('DOMContentLoaded', init);

function init() {
	const formEl = document.querySelector('form');
	const ulEl = document.querySelector('.messages');
	formEl.noValidate = true;

	if (formEl) {
		formEl.addEventListener('submit', handleSubmit);
	}

	function handleSubmit(e) {
		e.preventDefault();

		let errors = [];

		const fields = [
			{ name: 'firstName', label: 'Imię', required: true },
			{ name: 'lastName', label: 'Nazwisko', required: true },
			{ name: 'street', label: 'Ulica', required: true },
			{
				name: 'houseNumber',
				label: 'Numer budynku',
				required: true,
				type: 'number',
			},
			{
				name: 'flatNumber',
				label: 'Numer mieszkania',
				type: 'number',
			},
			{
				name: 'zip',
				label: 'Kod pocztowy',
				required: true,
				pattern: '[0-9]{2}-[0-9]{3}',
			},
			{ name: 'city', label: 'Miejscowość', required: true },
			{ name: 'voivodeship', label: 'Województwo', required: true },
		];

		checkDataInArray(fields, errors);

		ulEl.innerHTML = '';

		if (errors.length === 0) {
			alert('Dane zostały wysłane prawidłowo!');
			clearInputsValue(fields);
		} else {
			createErrorsList(errors);
		}
	}

	function checkDataInArray(arr, errorsBox) {
		arr.forEach(function (arrEl) {
			const {
				name,
				label,
				type = 'text',
				required = false,
				pattern = null,
			} = arrEl;
			const inputValue = formEl.elements[name].value;

			if (required) {
				if (inputValue === '') {
					errorsBox.push(`Dane w polu ${label} są wymagane!`);
				}
			}

			if (type === 'number') {
				if (Number.isNaN(Number(inputValue))) {
					errorsBox.push(`Dane w polu ${label} muszą być liczbą!`);
				}
			}
			if (pattern) {
				const reg = new RegExp(pattern);
				if (!reg.test(inputValue)) {
					errorsBox.push(`Dane w polu ${label} nie są w odpowiednim formacie!`);
				}
			}
		});
	}

	function createErrorsList(errorsBox) {
		errorsBox.forEach(function (err) {
			const liEl = document.createElement('li');
			liEl.innerText = err;
			ulEl.appendChild(liEl);
		});
	}

	function clearInputsValue(arr) {
		arr.forEach(function (el) {
			formEl[el.name].value = '';
		});
	}
}
