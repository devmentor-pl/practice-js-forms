const formEl = document.querySelector("form")
formEl.addEventListener("submit", getFormData)
const errorMessages = document.querySelector(".messages")

function getFormData(e) {
	e.preventDefault()

	const firstNameFromInput = e.target.elements.firstName.value
    
	const lastNameFromInput = e.target.elements.lastName.value
	const streetName = e.target.elements.street.value
	const numberOfBuilding = e.target.elements.houseNumber.value
	const numberOfFlat = e.target.elements.flatNumber.value
	const zipCodeValue = e.target.elements.zip.value
	const zipCodeInput = e.target.elements.zip

	const cityName = e.target.elements.city.value
	const voivodeship = e.target.elements.voivodeship.value
	const errors = []

	if (firstNameFromInput === "" || firstNameFromInput.length < 2) {
		errors.push("First name need to have at least 2 characters")
	}

	if (lastNameFromInput === "" || lastNameFromInput.length < 2) {
		errors.push("Last name need to have at least 2 characters")
	}

	if (streetName === "" || streetName.length < 3) {
		errors.push("Street name need to have at least 3 characters")
	}

	if (numberOfBuilding === "") {
		errors.push("The number of house needs to be filled")
	}

	if (zipCodeInput.validity.patternMismatch) {
		errors.push("The zip code need to be put in proper style")
	}

	if (cityName === "" || cityName.length < 3) {
		errors.push("The city name needs to have at least 3 characters")
	}

	if (voivodeship === "") {
		errors.push("You need to choose the voivodeship")
	}

    if (errors.length > 0) {
        errorMessages.innerHTML = ''

        errors.forEach(function (element) {
            const newLi = document.createElement('li')
            newLi.innerText = element
            errorMessages.appendChild(newLi)
        })
    }

    if (errors.length === 0) {
        alert("Your data has been sent successfully")
    }

}






// const firstNameFromInput = formEl.elements['firstName']
// const lastNameFromInput = formEl.elements['lastName']
// const streetName = formEl.elements['street']
// const numberOfBuilding = formEl.elements['houseNumber']
// const numberOfFlat = formEl.elements['flatNumber']
// const zipCode = formEl.elements['zip']
// const cityName = formEl.elements['city']
// const voivodeship = formEl.elements['voivodeship']
// const errors = []

// const usersList = document.querySelector('.users-list')
// formEl.addEventListener('submit', getFormData)

// // console.log(formEl.elements);

// function getFormData (e) {
//     e.preventDefault();
// // console.log(formEl.elements);
//     const firstNameFromInput = formEl.elements['firstName']
//     const lastNameFromInput = formEl.elements['lastName']

//     if(firstNameFromInput && lastNameFromInput) {
//         const fullNameToLi = `${firstNameFromInput.value} ${lastNameFromInput.value}`
//         const userData = document.createElement('li')
//         userData.classList.add('users-list__person')
//         userData.innerText = fullNameToLi
//         usersList.appendChild(userData)

//         firstNameFromInput.value = ''
//         lastNameFromInput.value = ''
//     }

// }
