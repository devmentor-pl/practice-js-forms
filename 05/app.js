const formEl = document.querySelector("form");
const zipInputEl = document.querySelector('input[name="zip"]');
const voivodeshipSelectList = document.querySelector(
	'select[name="voivodeship"]'
);
const messageList = document.querySelector(".messages");

// Czyszczenie komunikatów przed ponowną walidacją
messageList.innerText = "";

function validateZipCode(zipCode) {
	var zipPattern = /^[0-9]{2}-[0-9]{3}$/;
	return zipPattern.test(zipCode);
}

function validateVoivodeship(voivodeship) {
	return voivodeship !== "";
}

function displayErrorMessage(message) {
	const errorMessage = document.createElement("li");
    errorMessage.style.color = "red"
	errorMessage.textContent = message;
	messageList.appendChild(errorMessage);
}

function displaySuccessMessage(message) {
	const successMessage = document.createElement("li");
	successMessage.style.color = "blue"; // Możesz dostosować styl
	successMessage.textContent = message;
	messageList.appendChild(successMessage);
}

if (formEl !== null) {
	formEl.addEventListener("submit", (e) => {
		e.preventDefault();

		const zipCode = zipInputEl.value;
		const voivodeship = voivodeshipSelectList.value;

		if (!validateZipCode(zipCode)) {
			displayErrorMessage("Nieprawidłowy kod pocztowy.");
		}

		if (!validateVoivodeship(voivodeship)) {
			displayErrorMessage("Proszę wybrać województwo.");
		}

		if (validateZipCode(zipCode) && validateVoivodeship(voivodeship)) {
			displaySuccessMessage("Formularz został pomyślnie wysłany!");
		}
	});
}

// jak wyczyścić ponownie listę błędów przed ponownym uzupełnieniem formularza?