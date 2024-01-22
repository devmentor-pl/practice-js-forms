const formEl = document.querySelector("form");
const zipInputEl = document.querySelector('input[name="zip"]');
const voivodeshipSelectList = document.querySelector(
	'select[name="voivodeship"]'
);
const inputNameEl = document.querySelector('div input[name="firstName"]');
const inputSurnameEl = document.querySelector('div input[name="lastName"]');
const inputStreetEl = document.querySelector('div input[name="street"]');
const houseNumberInput = document.querySelector('div input[name="houseNumber"]');
const flatNumberInput = document.querySelector('div input[name="flatNumber"]');
const cityInputEl = document.querySelector('div input[name="city"]')
const messageList = document.querySelector(".messages");




function validateCity(){
	if(cityInputEl.value.trim() === ''){
		displayErrorMessage('Proszę podać miejscowość')
	}else{
		displaySuccessMessage('pole poprawnie wypełnione')
	}
}

function validateHouseNumber(){
	if(houseNumberInput.value.trim() ===''){
		displayErrorMessage('Proszę podać numer budynku')
	}else{
		displaySuccessMessage("pole poprawnie wypełnione");
	}
}

function validateNameAndSurname() {
	if(inputNameEl.value.trim() === '' || inputSurnameEl.value.trim() === ''){
		displayErrorMessage('Proszę podać imię i nazwisko')
		
	}else{
		displaySuccessMessage("pole poprawnie wypełnione");
	}
}


function validateStreetAndFlatNumbers(){
	if(inputStreetEl.value.trim() === "" || flatNumberInput.value.trim() ===""){
		displayErrorMessage('Proszę podać numer ulicy i mieszkania')
	}else{
		displaySuccessMessage("pole poprawnie wypełnione");
	}
}

// Czyszczenie komunikatów przed ponowną walidacją
messageList.innerText = "";

function validateZipCode(zipCode) {
	const zipPattern = /^[0-9]{2}-[0-9]{3}$/;
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
	successMessage.style.color = "blue";
	successMessage.textContent = message;
	messageList.appendChild(successMessage);
}


if (formEl !== null) {
	formEl.addEventListener("submit", (e) => {
		e.preventDefault();

		const zipCode = zipInputEl.value;
		const voivodeship = voivodeshipSelectList.value;
		const firstName = inputNameEl.value
		const lastName = inputSurnameEl.value
		const streetNumber = inputStreetEl.value
		const houseNumber = houseNumberInput.value
		const flatNumber = flatNumberInput.value
		const cityName = cityInputEl.value

		 messageList.innerHTML = "";

		if (!validateZipCode(zipCode)) {
			displayErrorMessage("Nieprawidłowy kod pocztowy.");
		}

		if (!validateVoivodeship(voivodeship)) {
			displayErrorMessage("Proszę wybrać województwo.");
		}

		if (
			validateZipCode(zipCode) &&
			validateVoivodeship(voivodeship) &&
			validateNameAndSurname(firstName, lastName) &&
			validateStreetAndFlatNumbers(streetNumber, flatNumber, houseNumber) &&
			validateCity(cityName)
		) {
			displaySuccessMessage("Formularz został pomyślnie wysłany!");
		}

		validateNameAndSurname();
		validateStreetAndFlatNumbers();
		validateCity();
		validateHouseNumber();
	});
}
