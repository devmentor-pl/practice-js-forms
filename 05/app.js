const formEl = document.querySelector('form')
const messageList = document.querySelector('.messages')

formEl.addEventListener('submit', function (e) {
	e.preventDefault()
	checkCorrectForm(e)
})

function checkCorrectForm(e) {
	const errors = []
	const firstName = e.target.elements.firstName.value
	const lastName = e.target.elements.lastName.value
	const street = e.target.elements.street.value
	const houseNumber = e.target.elements.houseNumber.value
	const flatNumber = e.target.elements.flatNumber.value
	const zipCode = e.target.elements.zip.value
	const pattern = /[0-9]{2}-[0-9]{3}/
	const validZipCode = zipCode.match(pattern)
	const city = e.target.elements.city.value
	const voivodeship = e.target.elements.voivodeship.value

	if (firstName === '') {
		errors.push('Proszę podać imię')
	}
	if (lastName === '') {
		errors.push('Proszę podać nazwisko')
	}
	if (street === '') {
		errors.push('Proszę podać ulicę')
	}
	if (houseNumber === '') {
		errors.push('Proszę podać poprawny numer budynku')
	}
	if (flatNumber === '') {
		errors.push('Proszę podać poprawny numer mieszkania')
	}
	if (zipCode === '' || validZipCode === null) {
		errors.push('Proszę podać poprawny kod pocztowy')
	}
	if (city === '') {
		errors.push('Proszę podać miejscowość')
	}
	if (voivodeship === '') {
		errors.push('Proszę wybrać województwo')
	}

	if (errors.length > 0) {
		messageList.innerHTML = ''
		showErrors(errors)
	} else {
		alert('Formularz wypełniony prawidłowo!')
	}
}

function showErrors(arr) {
	arr.forEach(function (el) {
		const liItem = document.createElement('li')
		liItem.textContent = el

		messageList.appendChild(liItem)
	})
}
