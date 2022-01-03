document.querySelector('form').addEventListener('submit', register);

let email = document.getElementById('formLogin');
let isEmail = (mail) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
let pass1 = document.getElementById('formPass1');
let pass2 = document.getElementById('formPass2');
let checkbox = document.getElementById('formAccept');
let errors;
let labels = [ ...document.getElementsByTagName('label') ];

function register(e) {
	e.preventDefault();
	errors = [];
	labels.forEach((l) => (l.style.color = 'black'));

	!isEmail(email.value) && errors.push('formLogin');

	(pass1.value.length < 6 || pass2.value.length < 6 || !(pass1.value === pass2.value)) &&
		errors.push('formPass1') &&
		errors.push('formPass2');

	!checkbox.checked && errors.push('formAccept');

	errors.length == 0 && console.log('done');
	errors.forEach((err) => labels.forEach((lab) => lab.getAttribute('for') === err && (lab.style.color = 'red')));
}
