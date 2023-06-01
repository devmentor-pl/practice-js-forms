const form = document.querySelector('form')
form.noValidate = true
const messagesContainer = document.querySelector('.messages')
let errors = []

const crateErrorMsg = function (label) {
	const newMessage = document.createElement('li')
	newMessage.style.color = 'red'
	newMessage.innerText = `Pole ${label.toLowerCase()} nie może być puste.`
	errors.push(newMessage)
	return errors
}

const createFalsyMsg = function (label, str) {
	const newMessage = document.createElement('li')
	newMessage.style.color = 'orange'
	newMessage.innerText = `Proszę wpisz poprawnie ${label.toLowerCase()}. ${label} ${str}`
	errors.push(newMessage)
}

const validateString = function (input) {
	const regex = /^[a-zA-ZzóąśłżźćńÓĄŚŁŻŹĆŃ]+(?:\s[a-zA-ZzóąśłżźćńÓĄŚŁŻŹĆŃ]+)*(?:\s-\s[a-zA-ZzóąśłżźćńÓĄŚŁŻŹĆŃ]+)*$/
	const value = input.value
	const label = input.parentNode.innerText.trim()
	if (!value) {
		crateErrorMsg(label)
	} else if (!value.match(regex)) {
		const str = 'nie może zawierać numerów oraz znaków specjalnych oprócz myślnika.'
		createFalsyMsg(label, str)
	}
}

const validateNum = function (num) {
	const regex = /^\d{1,3}[a-z-A-Z\ \d#]{0,1}$/
	const value = num.value
	const label = num.parentNode.innerText.trim()
	if (!value) {
		crateErrorMsg(label)
	} else if (!value.match(regex)) {
		const str = 'może zawierać tylko numer od 1 do 999 i literę od A do Z.'
		createFalsyMsg(label, str)
	}
}

const validateZip = function (code) {
	const regex = /\d{2}-\d{3}/
	const value = code.value
	const label = code.parentNode.innerText.trim()
	if (!value) {
		crateErrorMsg(label)
	} else if (!value.match(regex)) {
		const str = 'musi zawierać myślnik'
		createFalsyMsg(label, str)
	}
}

const validateRegion = function (region) {
	const value = region.value
	const label = region.parentNode.innerText.trim().split(' ')[0]
	if (value === '') {
		crateErrorMsg(label)
	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault()
	messagesContainer.innerHTML = ''
	const name = e.target.elements.firstName
	const surname = e.target.elements.lastName
	const street = e.target.elements.street
	const houseNum = e.target.elements.houseNumber
	const flatNum = e.target.elements.flatNumber
	const code = e.target.elements.zip
	const region = e.target.elements.voivodeship
	const town = e.target.elements.city
	validateString(name)
	validateString(surname)
	validateString(street)
	validateString(town)
	validateNum(houseNum)
	validateNum(flatNum)
	validateZip(code)
	validateRegion(region)
	if (errors.length > 0) {
		e.preventDefault()
		console.log(errors)
		errors.forEach(function (msg) {
			messagesContainer.appendChild(msg)
		})
		errors = []
	} else {
		alert('Formularz poprawnie wypełniony')
	}
})
