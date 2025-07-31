const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

function checkData(e) {
	e.preventDefault();

	const fields = [
		{name: 'firstName', label: 'Imię', required: true},
		{name: 'lastName', label: 'Nazwisko', required: true},
		{name: 'street', label: 'ulica', required: true},
		{name: 'houseNumber', label: 'Numer budynku', type: 'number', required: true},
		{name: 'flatNumber', label: 'Numer mieszkania', type: 'number', required: true},
		{name: 'zip', label: 'Kod pocztowy', pattern: /[0-9]{2}-[0-9]{3}/, required: true},
		{name: 'city', label: 'Miasto', required: true},
		{name: 'voivodeship', label: 'Województwo', required: true},
	]
	
	const errors = [];
	// const firstName = e.target.elements.firstName.value;
	// const lastName = e.target.elements.lastName.value;
	// const street = e.target.elements.street.value;
	// const houseNumber = Number(e.target.elements.houseNumber.value);
	// const zip = e.target.elements.zip.value;
	// const city = e.target.elements.city.value;
	// const voivodeship = e.target.elements.voivodeship.value;

	fields.forEach(function(field) {
		const value = formEl.elements[field.name].value;
		if(field.required) {
			if(value.length === 0) {
				errors.push('Dane w polu '+ field.label +' są niepoprawne!')
			}
		}

		if (field.type === 'number') {
			if (Number.isNaN(Number(value))) {
				errors.push(
					'Dane w polu ' + field.label + ' muszą być liczbą.'
				);
			}
		}

		if (field.pattern) {
			const reg = new RegExp(field.pattern);
			if (!reg.test(value)) {
				errors.push(
					'Dane w polu ' +
						field.label +
						' zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.'
				);
			}
		}


	})

	// if (firstName.length < 2) {
	// 	errors.push('Nieprawidłowo podano imię');
	// }
	// if (lastName.length < 2) {
	// 	errors.push('Nieprawidłowo podano nazwisko');
	// }
	// if (street.length < 2) {
	// 	errors.push('Nieprawidłowo podano nazwę ulicy');
	// }
	// if (houseNumber.length <= 0) {
	// 	errors.push('Nieprawidłowo podano nr budynku');
	// }
	// if (zip.length !== 6 || zip.match(/[0-9]{2}-[0-9]{3}/) === null) {
	// 	errors.push('Nieprawidłowo podano kod pocztowy');
	// }
	// if (city.length < 2) {
	// 	errors.push('Nieprawidłowo podano miejscowość');
	// }
	// if (voivodeship.length < 1) {
	// 	errors.push('Wybierz wojewóddztwo');
	// }

	ulEl.innerHTML = '';
	if (errors.length === 0) {
		alert('Dane zostały wypełnione prawidłowo!');

		// czyszczę pola po prawidłowym wypełnieniu formularza
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


	// ulEl.innerHTML = '';
	// if (errors.length > 0) {
	// 	e.preventDefault();
	// 	errors.forEach(function (item) {
	// 		const liEl = document.createElement('li');
	// 		liEl.innerText = item;
	// 		ulEl.appendChild(liEl);
	// 	});
	// } else {
	// 	alert('Formularz wysłano!');
	// }
}

formEl.addEventListener('submit', checkData);
