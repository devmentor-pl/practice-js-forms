const messages = document.querySelector(".messages");
const formEl = document.querySelector("form");
formEl.noValidate = true;

if (formEl) {
	formEl.addEventListener("submit", checkData);
}

function checkData(e) {
	e.preventDefault();
	if (messages.children.length > 0) {
		deleteMessageFromHTML();
	}

	const firstName = e.target.elements.firstName;
	const lastName = e.target.elements.lastName;
	const street = e.target.elements.street;
	const houseNumber = e.target.elements.houseNumber;
	const zip = e.target.elements.zip;
	const city = e.target.elements.city;
	const voivodeship = e.target.elements.voivodeship;

	const whiteSpaceReg = /\s/g;
	const zipCodePLreg = /^[0-9]{2}-[0-9]{3}/;

	if (firstName.value === "" || whiteSpaceReg.test(firstName)) {
		addMessageToHTML("Proszę podać imię.", firstName);
	}
	if (lastName.value === "" || whiteSpaceReg.test(lastName)) {
		addMessageToHTML("Proszę podać nazwisko.", lastName);
	}
	if (street.value === "" || whiteSpaceReg.test(street)) {
		addMessageToHTML("Proszę podać ulicę.", street);
	}
	if (houseNumber.value === "") {
		addMessageToHTML("Proszę podać nr budynku.", houseNumber);
	}
	if (zip.value === "" || zipCodePLreg.test(zip.value) === false) {
		addMessageToHTML("Proszę podać prawidłowy kod pocztowy.", zip);
	}
	if (city.value === "" || whiteSpaceReg.test(city)) {
		addMessageToHTML("Proszę podać miasto.", city);
	}
	if (voivodeship.value === "") {
		addMessageToHTML("Proszę wybrać województwo.", voivodeship);
	}

	if (messages.children.length === 0) {
		alert("Dane zostały wysłane!");
	}
}

function addMessageToHTML(mess) {
	const newLi = document.createElement("li");
	newLi.innerText = mess;
	messages.appendChild(newLi);
}

function deleteMessageFromHTML() {
	Array.from(messages.children).forEach((e) => {
		e.remove();
	});
}
