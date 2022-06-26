const init = function () {
	const formByQuery = document.querySelector("form");

	if (formByQuery) {
		formByQuery.addEventListener("submit", checkData);
	}
};

document.addEventListener("DOMContentLoaded", init);

const checkData = function (e) {
	e.preventDefault();
	const label = document.querySelectorAll("label");
	const email = e.target[0];
	const password1 = e.target[1];
	const password2 = e.target[2];
	const checkBox = e.target[3];

	let errors = [];
	if (!email.value.includes("@")) {
		errors.push(email);
	}
	if (password1.value !== password2.value) {
		errors.push(password2);
	}
	if (password1.value.length < 6) {
		errors.push(password1);
	}
	if (password2.value.length < 6) {
		errors.push(password2);
	}
	if (checkBox.checked === false) {
		errors.push(checkBox);
	}
	label.forEach(function (element) {
		element.style.color = "black";
	});
	if (errors.length > 0) {
		e.preventDefault();
		errors.forEach(function (element) {
			if (element) {
				element.previousElementSibling.style.color = "red";
			}
		});
	} else {
		e.preventDefault();
		console.log("Done!");
	}
};
