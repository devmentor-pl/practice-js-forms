const formEl = document.querySelector('form');
formEl.noValidate = true;

const labelList = document.querySelectorAll('label');

formEl.addEventListener('submit', validateData);

function validateData(e) {
	e.preventDefault();

	const firstName = e.target.elements.firstName.value;
	const lastName = e.target.elements.lastName.value;
	const avoidChars = /[1-9!@#$%^&*]/g;
	fullName(firstName, lastName, avoidChars);

	const streetName = e.target.elements.street.value;
	streetNameValidation(streetName);

	const houseNumber = e.target.elements.houseNumber.value;
	const flatNumber = e.target.elements.flatNumber.value;
	buildingNumber(houseNumber, flatNumber);

	const postalCode = e.target.elements.zip.value;
	postalCodeValidation(postalCode);

	const city = e.target.elements.city.value;
	cityValidation(city, avoidChars);

	const voivodeship = e.target.elements.voivodeship.value;
	voivodeshipValidation(voivodeship);

	finalValidation();
}

function fullName(firstName, lastName, avoidChars) {
	if (!avoidChars.test(firstName) && firstName) {
		labelList[0].style.color = 'black';
	} else {
		labelList[0].style.color = 'red';
	}
	if (!avoidChars.test(lastName) && lastName) {
		labelList[1].style.color = 'black';
	} else {
		labelList[1].style.color = 'red';
	}
}

function streetNameValidation(streetName) {
	const avoidChars = /[!@#$%^&*]/g;
	if (!avoidChars.test(streetName) && streetName) {
		labelList[2].style.color = 'black';
	} else {
		labelList[2].style.color = 'red';
	}
}

function buildingNumber(houseNumber, flatNumber) {
	if (houseNumber >= 1) {
		labelList[3].style.color = 'black';
	} else {
		labelList[3].style.color = 'red';
	}
	if (flatNumber >= 1) {
		labelList[4].style.color = 'black';
	} else {
		labelList[4].style.color = 'red';
	}
}

function postalCodeValidation(postalCode) {
	console.log(postalCode);
	if (!/[0-9]{2}-[0-9]{3}/g.test(postalCode) && postalCode) {
		labelList[5].style.color = 'red';
	} else {
		labelList[5].style.color = 'black';
	}
}

function cityValidation(city, avoidChars) {
	if (!avoidChars.test(city) && city) {
		labelList[6].style.color = 'black';
	} else {
		labelList[6].style.color = 'red';
	}
}

function voivodeshipValidation(voivodeship) {
	if (voivodeship) {
		labelList[7].style.color = 'black';
	} else {
		labelList[7].style.color = 'red';
	}
}

function finalValidation() {
	let correctCounter = 0;
	labelList.forEach((el, index) => {
		if (labelList[index].style.color !== 'red') {
			correctCounter++;
		}
	});

	if (correctCounter === labelList.length) {
		alert('The form has been completed correctly.');
	} else {
		console.log('Invalid form of the form.');
	}
}
