const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

function checkData(e) {
	const errors = [];
	const firstName = e.target.elements.firstName.value;
	const lastName = e.target.elements.lastName.value;
	const street = e.target.elements.street.value;
	const houseNumber = Number(e.target.elements.houseNumber.value);
	const zip = e.target.elements.zip.value;
	const city = e.target.elements.city.value;
	const voivodeship = e.target.elements.voivodeship.value;
	if (firstName.length < 2) {
		errors.push('Nieprawidłowo podano imię');
	}
	if (lastName.length < 2) {
		errors.push('Nieprawidłowo podano nazwisko');
	}
	if (street.length < 2) {
		errors.push('Nieprawidłowo podano nazwę ulicy');
	}
	if (houseNumber.length <= 0) {
		errors.push('Nieprawidłowo podano nr budynku');
	}
	if (zip.length !== 6 || zip.match(/[0-9]{2}-[0-9]{3}/) === null) {
		errors.push('Nieprawidłowo podano kod pocztowy');
	}
	if (city.length < 2) {
		errors.push('Nieprawidłowo podano miejscowość');
	}
	if (voivodeship.length < 1) {
		errors.push('Wybierz wojewóddztwo');
	}

	if (errors.length > 0) {
		e.preventDefault();
		ulEl.innerHTML = '';
		errors.forEach(function (item) {
			const liEl = document.createElement('li');
			liEl.innerText = item;
			ulEl.appendChild(liEl);
		});
	} else {
		alert('Formularz wysłano!');
	}
}

formEl.addEventListener('submit', checkData);
