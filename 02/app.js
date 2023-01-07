const formEl = document.querySelector('form');
formEl.noValidate = true;

formEl.addEventListener('submit', checkData);

function checkData(e) {
	e.preventDefault();
	const email = e.target.elements.login;
	const pass1 = e.target.elements.pass1;
	const pass2 = e.target.elements.pass2;
	const accept = e.target.elements.accept;
	const errors = [];

	if (!email.value.includes('@')) {
		errors.push(email);
	}
	if (pass1.value.length < 6) {
		errors.push(pass1);
	}
	if (pass1.value !== pass2.value || pass2.value === '') {
		errors.push(pass1, pass2);
	}
	if (!accept.checked) {
		errors.push(accept);
	}

	resetLabelColor();

	if (errors.length > 0) {
		errors.forEach(function (err) {
			const label = err.previousElementSibling;
			label.style.color = 'red';
		});
	} else {
		console.log('Done');
	}
}

function resetLabelColor() {
	for (const el of formEl.elements) {
		if (el.type !== 'submit') {
			el.previousElementSibling.style.color = 'black';
		}
	}
}
