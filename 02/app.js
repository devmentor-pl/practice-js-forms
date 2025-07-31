const formEl = document.querySelector("form");
const pass1 = document.querySelector('input[name="pass1"]');
const pass2 = document.querySelector('input[name="pass2"]');
const inputsList = document.querySelectorAll("input");
// const checkboxEl = document.querySelector('input[name="accept"]');

formEl.addEventListener("submit", handleSubmit);

let errors = [];

function handleSubmit(e) {
	e.preventDefault();
	checkEmail(e, errors);
	checkPasswords(e, errors);
	checkCheckbox(e, errors);
	if (errors.length > 0) {
		errors.forEach((el) => {
			el.style.border = "1px solid red";
			errors = [];
		});
	}
	if (errors == []) {
		console.log("done");
	}
}

const checkEmail = (e, errors) => {
	const login = e.target.elements.login;
	const loginValue = login.value;
	const reExpCorrectEmail = /\S+@\S+\.\S+/;

	if (reExpCorrectEmail.exec(loginValue)) {
		login.style.border = "none";
	} else {
		errors.push(login);
	}
};

const checkPasswords = (e, errors) => {
	const pass1Value = pass1.value;
	const pass2Value = pass2.value;
	if (pass1Value === pass2Value && pass1Value !== "" && pass2 !== "") {
		pass1.style.border = "none";
		pass2.style.border = "none";
	} else {
		errors.push(pass1, pass2);
	}
};
const checkCheckbox = (e, errors) => {
	const checkBox = e.target.elements["accept"];
	if (checkBox.checked) {
		checkBox.previousElementSibling.style.border = "none";
	} else {
		errors.push(checkBox.previousElementSibling);
	}
};
