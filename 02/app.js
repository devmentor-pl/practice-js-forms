const formEl = document.querySelector('form');
const listLabel = document.querySelectorAll('label');

formEl.addEventListener('submit', validateData);

function validateData(e) {
	e.preventDefault();

	const emailLogin = e.target.elements.login.value;
	emailValidation(emailLogin);

	const pass1 = e.target.elements.pass1.value;
	const pass2 = e.target.elements.pass2.value;
	const passCondition = pass1 === pass2 && pass1.length >= 6;
	passwordValidation(passCondition);

	const acceptReg = e.target.elements['accept'].checked;
	acceptRegValidation(acceptReg);

	if (emailCondition && passCondition && acceptReg) {
		console.log('DONE');
	}
}

function emailValidation(emailLogin) {
	const emailLabel = listLabel[0];
	const emailCondition = emailLogin.match(/@/g);
	if (emailCondition) {
		emailLabel.style.color = 'black';
	} else {
		emailLabel.style.color = 'red';
	}
}

function passwordValidation(passCondition) {
	const passLabel1 = listLabel[1];
	const passLabel2 = listLabel[2];
	if (passCondition) {
		passLabel1.style.color = 'black';
		passLabel2.style.color = 'black';
	} else {
		passLabel1.style.color = 'red';
		passLabel2.style.color = 'red';
	}
}

function acceptRegValidation(acceptReg) {
	const acceptRegLabel = listLabel[3];
	if (acceptReg) {
		acceptRegLabel.style.color = 'black';
	} else {
		acceptRegLabel.style.color = 'red';
	}
}
