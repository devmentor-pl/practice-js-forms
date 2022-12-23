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

	email.previousElementSibling.style.color = 'black';
	pass1.previousElementSibling.style.color = 'black';
	pass2.previousElementSibling.style.color = 'black';
	accept.previousElementSibling.style.color = 'black';

	if (!email.value.includes('@')) {
		errors.push(email);
	}
	if (pass1.value.length < 6) {
		errors.push(pass1);
	}
	if (pass1.value !== pass2.value) {
		errors.push(pass1, pass2);
	}
	if (!accept.checked) {
		errors.push(accept);
	}

	if (errors.length > 0) {
		errors.forEach(function (err) {
			const label = err.previousElementSibling;
			label.style.color = 'red';
		});
	} else {
		console.log('Done');
	}
}
