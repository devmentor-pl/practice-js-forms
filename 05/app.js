document.addEventListener("DOMContentLoaded", init);

function init() {
	const formEl = document.querySelector("form");
	const messages = document.querySelector(".messages");
	formEl.noValidate = true;

	if (formEl) {
		formEl.addEventListener("submit", checkData);
	}

	function checkData(e) {
		e.preventDefault();
		const errors = [];

		const fields = [
			{ name: "firstName", label: "Imię", required: true },
			{ name: "lastName", label: "Nazwisko", required: true },
			{ name: "street", label: "Ulica", required: true },
			{
				name: "houseNumber",
				label: "Numer budunku",
				type: "number",
				required: true,
			},
			{
				name: "flatNumber",
				label: "Numer mieszkania",
				type: "number",
				required: false,
			},
			{
				name: "zip",
				label: "Kod pocztowy",
				required: true,
				pattern: "[0-9]{2}-[0-9]{3}",
			},
			{ name: "city", label: "Miejscowość", required: true },
			{ name: "voivodeship", label: "Województwo", required: true },
		];

		fields.forEach((field) => {
			const value = formEl.elements[field.name].value;

			if (field.required) {
				if (value.length === 0) {
					errors.push(`Dane w polu ${field.label} są wymagane.`);
				}
			}

			if (field.type === "number") {
				if (!isNaN(field.value)) {
					errors.push(`Dane w polu ${field.label} muszą być liczbą`);
				}
			}
			if (field.pattern) {
				const reg = new RegExp(field.pattern);
				if (!reg.test(value)) {
					errors.push(
						`Dane w polu ${field.label} zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.`
					);
				}
			}
		});
		
		messages.innerHTML = "";
		if (errors.length === 0) {
			console.log("ok");
			fields.forEach(function (el) {
				formEl[el.name].value = "";
			});
		} else {
			errors.forEach((e) => {
				const newLi = document.createElement("li");
				newLi.innerText = e;
				messages.appendChild(newLi);
			});
		}
	}
}

// function checkData(e) {
// 	e.preventDefault();
// 	if (messages.children.length > 0) {
// 		deleteMessageFromHTML();
// 	}

// 	const firstName = e.target.elements.firstName;
// 	const lastName = e.target.elements.lastName;
// 	const street = e.target.elements.street;
// 	const houseNumber = e.target.elements.houseNumber;
// 	const zip = e.target.elements.zip;
// 	const city = e.target.elements.city;
// 	const voivodeship = e.target.elements.voivodeship;

// 	const whiteSpaceReg = /\s/g;
// 	const zipCodePLreg = /^[0-9]{2}-[0-9]{3}/;

// 	if (firstName.value === "" || whiteSpaceReg.test(firstName)) {
// 		addMessageToHTML("Proszę podać imię.", firstName);
// 	}
// 	if (lastName.value === "" || whiteSpaceReg.test(lastName)) {
// 		addMessageToHTML("Proszę podać nazwisko.", lastName);
// 	}
// 	if (street.value === "" || whiteSpaceReg.test(street)) {
// 		addMessageToHTML("Proszę podać ulicę.", street);
// 	}
// 	if (houseNumber.value === "") {
// 		addMessageToHTML("Proszę podać nr budynku.", houseNumber);
// 	}
// 	if (zip.value === "" || zipCodePLreg.test(zip.value) === false) {
// 		addMessageToHTML("Proszę podać prawidłowy kod pocztowy.", zip);
// 	}
// 	if (city.value === "" || whiteSpaceReg.test(city)) {
// 		addMessageToHTML("Proszę podać miasto.", city);
// 	}
// 	if (voivodeship.value === "") {
// 		addMessageToHTML("Proszę wybrać województwo.", voivodeship);
// 	}

// 	if (messages.children.length === 0) {
// 		alert("Dane zostały wysłane!");
// 	}
// }

// function addMessageToHTML(mess) {
// 	const newLi = document.createElement("li");
// 	newLi.innerText = mess;
// 	messages.appendChild(newLi);
// }

// function deleteMessageFromHTML() {
// 	Array.from(messages.children).forEach((e) => {
// 		e.remove();
// 	});
// }
