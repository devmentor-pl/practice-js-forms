document.addEventListener("DOMContentLoaded", init);
const formElement = document.querySelector("form");

function init() {
	formElement.addEventListener("submit", handleData);
}

if (formElement) {
	function handleData(e) {
		e.preventDefault();
		const wrongDataList = document.querySelector(".messages");
		let errors = [];

		const fields = [
			{
				name: "firstName",
				label: "Imię",
				required: true,
			},
			{
				name: "lastName",
				label: "Nazwisko",
				required: true,
			},
			{ name: "street", label: "Ulica", required: true },
			{
				name: "houseNumber",
				label: "Numer budynku",
				type: "number",
				required: true,
			},
			{ name: "flatNumber", label: "Numer mieszkania", type: "number" },
			{
				name: "zip",
				label: "Kod pocztowy",
				pattern: "^[0-9]{2}-[0-9]{3}$",
				required: true,
			},
			{
				name: "city",
				label: "Miejscowość",
				required: true,
			},
			{ name: "voivodeship", label: "Województwo", required: true },
		];

		fields.forEach(function (field) {
			const value = formElement.elements[field.name].value;

			if (field.required) {
				if (value.length === 0) {
					errors.push("To pole jest wymagane.");
				}
			}

			if (field.type === "number") {
				if (Number.isNaN(Number(value))) {
					errors.push("Dane w polu " + field.label + " muszą być liczbą.");
				}
			}

			if (field.pattern) {
				const reg = new RegExp(field.pattern);

				if (!reg.test(value)) {
					errors.push("Wpisz kod pocztowy zgodnie ze wzorem.");
				}
			}
		});

		// const firstNameElement = document.querySelector('input[name="firstName"]');
		// const lastNameElement = document.querySelector('input[name="lastName"]');
		// const streetElement = document.querySelector('input[name="street"]');
		// const houseNumberElement = document.querySelector(
		// 	'input[name="houseNumber"]'
		// );
		// const flatNumberElement = document.querySelector(
		// 	'input[name="flatNumber"]'
		// );
		// const zipElement = document.querySelector('input[name="zip"]');
		// const cityElement = document.querySelector('input[name="city"]');
		// const voivodeshipElement = document.querySelector(
		// 	'select[name="voivodeship"]'
		// );

		// if (firstNameElement.value === "") {
		// 	errors.push("Podaj swoje imię");
		// }

		// if (lastNameElement.value === "") {
		// 	errors.push("Podaj swoje nazwisko");
		// }

		// if (streetElement.value === "") {
		// 	errors.push("Wpisz swoją ulicę");
		// }

		// if (
		// 	houseNumberElement.value === "" ||
		// 	Number.isNaN(houseNumberElement.value)
		// ) {
		// 	errors.push("Podaj numer domu");
		// }

		// if (
		// 	flatNumberElement.value === "" ||
		// 	Number.isNaN(flatNumberElement.value)
		// ) {
		// 	errors.push("Podaj numer mieszkania");
		// }

		// if (
		// 	zipElement.value === "" ||
		// 	!/[0-9]{2}-[0-9]{3}/.test(zipElement.value)
		// ) {
		// 	errors.push("Podaj prawidłlowy kod");
		// }

		// if (cityElement.value === "") {
		// 	errors.push("Wybierz swoje miasto");
		// }

		// if (voivodeshipElement.value === "") {
		// 	errors.push("Wybierz swoje województwo");
		// }

		wrongDataList.innerHTML = " ";

		if (errors.length === 0) {
			alert("Dziękujemy za wypełnienie formularza");
		} else {
			errors.forEach(function (err) {
				const liEl = document.createElement("li");
				liEl.innerText = err;
				wrongDataList.appendChild(liEl);
			});
		}
	}
}
