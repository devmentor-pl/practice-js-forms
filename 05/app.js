let formElement = document.querySelector('form');
let messages = document.querySelector('.messages');
let errors;

formElement.noValidate = true;
formElement.addEventListener('submit', validateAll);

function validateAll(e) {
	e.preventDefault();

	errors = [];

	[ ...e.target.elements ].map((el) => validateElement(el));

	showErrors(errors);
}

function validateElement(el) {
	return el.required && el.value == '' ? setErrorMessage(el, 'wymagane') : el.pattern && checkPattern(el);
}

function checkPattern(el) {
	return !new RegExp(el['pattern']).test(el.value) && setErrorMessage(el, 'niepoprawne');
}

function setErrorMessage(el, option) {
	return errors.push(
		`Pole ${el.parentElement.innerText.split('\n')[0].trim().toLowerCase().replace(':', '')} jest ${option}`
	);
}

function showErrors(errors) {
	messages.innerHTML = '';

	return errors.length
		? errors.map((err) => {
				let newLi = document.createElement('li');
				newLi.textContent = err;
				return messages.appendChild(newLi);
			})
		: (messages.innerHTML = 'Dane zostały wysłane prawidłowo');
}
