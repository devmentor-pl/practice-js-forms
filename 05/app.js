document.addEventListener('DOMContentLoaded', init);
function init() {
	const form = document.querySelector('form');
	const ulEl = document.querySelector('ul');
	if (form) {
		form.addEventListener('submit', onSubmit);
	}
	function onSubmit(e) {
		e.preventDefault();
		const fields = [
			{ name: 'firstName', label: 'Imię', required: true },
			{ name: 'lastName', label: 'Nazwisko', required: true },
			{ name: 'street', label: 'Ulica', required: true },
			{
				name: 'houseNumber',
				label: 'Numer domu',
				type: 'number',
				required: true,
			},
			{
				name: 'flatNumber',
				label: 'Numer mieszkania',
				type: 'number',
				required: true,
			},
			{
				name: 'zip',
				label: 'Kod pocztowy',
				pattern: /[0-9]{2}-[0-9]{3}/,
				required: true,
			},
			{ name: 'city', label: 'Miasto', required: true },
			{ name: 'voivodeship', label: 'Województwo', required: true },
		];

		const firstNameEl = form.elements.firstName;
		const lastNameEl = form.elements.lastName;
		const streetEl = form.elements.street;
		const houseNumberEl = form.elements.houseNumber;
		const flatNumberEl = form.elements.flatNumber;
		const zipEl = form.elements.zip;
		const cityEl = form.elements.city;
		const voivodeshipEl = form.elements.voivodeship;
		const errors = [];

		fields.forEach(function (field) {
			const value = form.elements[field.name].value;
			if (field.required) {
				if (value.length === 0) {
					errors.push(`Pole:${field.label} jest wymagane!`);
				}
			}
			if (field.type === 'number') {
				if (Number.isNaN(Number(value))) {
					errors.push(`${field.label} jest nieprawidłowa!`);
				}
			}
			if (field.pattern) {
				const reg = new RegExp(field.pattern);
				if (!reg.test(zipEl.value)) {
					errors.push(
						`Pole:${field.label} musi być zgodny ze wzorcem kodu pocztowego!${field.pattern}`
					);
				}
			}
		});

		// if (firstNameEl.value.length === 0) {
		// 	errors.push('Empty first name');
		// }
		// if (lastNameEl.value.length === 0) {
		// 	errors.push('Empty last name');
		// }
		// if (streetEl.value.length === 0) {
		// 	errors.push('Empty street name');
		// }
		// if (
		// 	Number.isNaN(Number(houseNumberEl.value)) ||
		// 	houseNumberEl.value.length === 0
		// ) {
		// 	errors.push('Wrong house number');
		// }
		// if (
		// 	Number.isNaN(Number(flatNumberEl.value)) ||
		// 	flatNumberEl.value.length === 0
		// ) {
		// 	errors.push('Wrong flat number');
		// }
		// if (!/[0-9]{2}-[0-9]{3}/.test(zipEl.value)) {
		// 	errors.push('Wrong zip code');
		// }
		// if (cityEl.value.length === 0) {
		// 	errors.push('Empty city');
		// }
		// if (voivodeshipEl.value.length === 0) {
		// 	errors.push('Wrong voivodeship');
		// }

		if (errors.length === 0) {
			alert('Success!Formularz został wysłany');
		} else {
			ulEl.textContent = '';
			errors.forEach(function (text) {
				const liEl = document.createElement('li');
				liEl.textContent = text;
				ulEl.appendChild(liEl);
			});
		}
		console.log(errors);
	}
}
