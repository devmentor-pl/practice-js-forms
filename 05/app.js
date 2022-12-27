document.addEventListener('DOMContentLoaded', init);

function init() {
	const formEl = document.querySelector('form');
	const ulEl = document.querySelector('.messages');
	const submitEl = document.querySelector('input[type="submit"]');

	if (formEl) {
		formEl.addEventListener('submit', handleSubmit);
	}

	function handleSubmit(e) {
		e.preventDefault();

		let errors = [];

		const nameEl = e.target.elements.firstName;
		const lastNameEl = e.target.elements.lastName;
		const streetNameEl = e.target.elements.street;
		const houseNumberEl = e.target.elements.houseNumber;
		const flatNumberEl = e.target.elements.flatNumber;
		const zipCodeEl = e.target.elements.zip;
		const cityEl = e.target.elements.city;
		const voivodeshipEl = e.target.elements.voivodeship;

		if (nameEl.value === '') {
			errors.push('Dane w polu Imię są niepoprawne!');
		}
		if (lastNameEl.value === '') {
			errors.push('Dane w polu Nazwisko są niepoprawne!');
		}
		if (streetNameEl.value === '') {
			errors.push('Dane w polu Ulica są niepoprawne!');
		}
		if (houseNumberEl.value === '' || Number.isNaN(houseNumberEl.value)) {
			errors.push('Dane w polu Numer Budynku są niepoprawne!');
		}
		if (Number.isNaN(flatNumberEl.value)) {
			errors.push('Dane w polu Numer Mieszkania są niepoprawne!');
		}
		if (zipCodeEl.value === '' || !/[0-9]{2}-[0-9]{3}/.test(zipCodeEl.value)) {
			errors.push('Dane w polu Kod pocztowy są niepoprawne!');
		}
		if (cityEl.value === '') {
			errors.push('Dane w polu Miejscowość są niepoprawne!');
		}
		if (voivodeshipEl.value === '') {
			errors.push('Dane w polu Województwo są niepoprawne!');
		}

		ulEl.innerHTML = '';

		if (errors.length === 0) {
			alert('Dane zostały wysłane prawidłowo!');
			const arrFromForm = Array.from(formEl.elements);
			arrFromForm.forEach(function (el) {
				if (el !== submitEl) {
					el.value = '';
				}
			});
		} else {
			errors.forEach(function (err) {
				const liEl = document.createElement('li');
				liEl.innerText = err;
				ulEl.appendChild(liEl);
			});
			errors = [];
		}
	}
}
