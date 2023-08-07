const formEl = document.querySelector('form');
const messages = document.querySelector('.messages');

const selectEl = formEl.querySelector('select');
const inputsEl = formEl.querySelectorAll('label input');
const postalCodeInput = formEl.querySelector('input[name="zip"]');

formEl.noValidate = true;

formEl.addEventListener('submit', function (e) {
	e.preventDefault();

	messages.innerHTML = '';
	const postalCode = postalCodeInput.value;
	const regex = /^[0-9]{2}-[0-9]{3}$/;
	let allInputsFilled = true;
	let emptyInputIndexes = [];

	for (let i = 0; i < inputsEl.length; i++) {
		const input = inputsEl[i];
		console.log(i);
		if (input.value.trim() === '') {
			allInputsFilled = false;
			emptyInputIndexes.push(i);
		}
	}

	if (selectEl.selectedIndex == 0) {
		allInputsFilled = false;
		err('wybierz wojewodztwo');
	}
	if (!regex.test(postalCode)) {
		allInputsFilled = false;
		err('wpisz poprawny kod pocztowy');
	}

	if (allInputsFilled) {
		alert('przeslano');
	} else {
		for (const index of emptyInputIndexes) {
			err(`pole o indexie ${index + 1} nie zostalo wypelnione, lub jest wypelnione niepoprawnie`);
		}
	}
});

function err(info) {
	const liElem = document.createElement('li');
	liElem.textContent = info;
	messages.appendChild(liElem);
}
