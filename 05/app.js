document.addEventListener("DOMContentLoaded", init);

function init() {
	const formElement = document.querySelector("form");
	formElement.addEventListener("submit", handleData);
}

function handleData(e) {
	e.preventDefault();
	const wrongDataList = document.querySelector(".messages");

	let errors = [];

	const firstNameElement = document.querySelector('input[name="firstName"]');
	const lastNameElement = document.querySelector('input[name="lastName"]');
	const streetElement = document.querySelector('input[name="street"]');
	const houseNumberElement = document.querySelector(
		'input[name="houseNumber"]'
	);
	const flatNumberElement = document.querySelector('input[name="flatNumber"]');
	const zipElement = document.querySelector('input[name="zip"]');
	const cityElement = document.querySelector('input[name="city"]');
	const voivodeshipElement = document.querySelector(
		'select[name="voivodeship"]'
	);

	if (firstNameElement.value === "") {
		errors.push("Podaj swoje imię");
	}

	if (lastNameElement.value === "") {
		errors.push("Podaj swoje nazwisko");
	}

	if (streetElement.value === "") {
		errors.push("Wpisz swoją ulicę");
	}

	if (
		houseNumberElement.value === "" ||
		Number.isNaN(houseNumberElement.value)
	) {
		errors.push("Podaj numer domu");
	}

	if (flatNumberElement.value === "" || Number.isNaN(flatNumberElement.value)) {
		errors.push("Podaj numer mieszkania");
	}

	if (zipElement.value === "" || !/[0-9]{2}-[0-9]{3}/.test(zipCodeEl.value)) {
		errors.push("Podaj prawidłlowy kod");
	}

	if (cityElement.value === "") {
		errors.push("Wybierz swoje miasto");
	}

	if (voivodeshipElement.value === "") {
		errors.push("Wybierz swoje województwo");
	}

	if (errors.length === 0) {
		alert("Dziękujemy za wypełnienie formularza");
	} else {
		wrongDataList.innerHTML = " ";

		errors.forEach(function (err) {
			const liEl = document.createElement("li");
			liEl.innerText = err;
			wrongDataList.appendChild(liEl);
		});
	}
}
