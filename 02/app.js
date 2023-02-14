const formElement = document.querySelector("form");

formElement.addEventListener("submit", register);

function register(e) {
	e.preventDefault();
	const emailElement = document.querySelector('input[name="login"]');

	const password1Element = document.querySelector('input[name="pass1"]');

	const password2Element = document.querySelector('input[name="pass2"]');

	const emailElementValue = document.querySelector('input[name="login"]').value;

	const password1ElementValue = document.querySelector(
		'input[name="pass1"]'
	).value;

	const password2ElementValue = document.querySelector(
		'input[name="pass2"]'
	).value;

	const checkedElement = document.querySelector('input[name="accept"]');
	const labelsList = document.querySelectorAll("label");

	const errors = [];

	if (!emailElementValue.includes("@")) {
		errors.push(emailElement);
	}

	if (password1ElementValue !== password2ElementValue) {
		errors.push(password1Element, password2Element);
	}

	if (password1ElementValue.length <= 6 || password2ElementValue.length <= 6) {
		errors.push(password1Element, password2Element);
	}

	if (!checkedElement.checked) {
		errors.push(checkedElement);
	}

	labelsList.forEach(function (label) {
		label.style.color = "black";
	});

	if (errors.length === 0) {
		console.log("done");
	} else {
		errors.forEach(function (error) {
			error.previousElementSibling.style.color = "red";
		});
	}
}
