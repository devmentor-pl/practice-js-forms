const formEl = document.querySelector('form');

formEl.addEventListener('submit', validation);

function validation(e) {
	e.preventDefault();

	const formEmail = document.querySelector('label[for="formLogin"]');
	const formCheckbox = document.querySelector('label[for="formAccept"]');
	const formPass1 = document.querySelector('label[for="formPass1"]');
	const formPass2 = document.querySelector('label[for="formPass2"]');

	const email = e.target.elements.login.value;
	const pass1 = e.target.elements.pass1.value;
	const pass2 = e.target.elements.pass2.value;
	const checkbox = e.target.elements.accept.checked;
	const passLen = 6;

	let isValid = true;

	function validateEmail(email) {
		const regExpMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regExpMail.test(email);
	}

	function validatePasswords(pass1, pass2) {
		if (pass1 !== pass2) {
			return false;
		}
		if (pass1.length < passLen) {
			return false;
		}
		return true;
	}

	if (!validateEmail(email)) {
		formEmail.style.color = 'red';
		isValid = false;
	} else {
		formEmail.style.color = 'black';
	}

	if (!validatePasswords(pass1, pass2)) {
		formPass1.style.color = 'red';
		formPass2.style.color = 'red';
		isValid = false;
	} else {
		formPass1.style.color = 'black';
		formPass2.style.color = 'black';
	}

	if (!checkbox) {
		formCheckbox.style.color = 'red';
		isValid = false;
	} else {
		formCheckbox.style.color = 'black';
	}

	if (isValid) {
		console.log('done');

		const labels = formEl.querySelectorAll('label');
		labels.forEach(label => (label.style.color = 'black'));

		e.target.elements.login.value = '';
		e.target.elements.pass1.value = '';
		e.target.elements.pass2.value = '';
		e.target.elements.accept.checked = false;
	}
}
