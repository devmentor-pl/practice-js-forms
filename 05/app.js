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

		const fieldsArray = [
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
        fieldsArray.forEach((field) => {
			const value = formElement.elements[field.name].value;

			if (field.required) {
				if (value.length === 0) {
					errors.push("Uzupełnij wymagane pole");
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
					errors.push("Wpisz kod");
				}
			}
		})
    }
}