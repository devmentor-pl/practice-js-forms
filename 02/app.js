const formEl = document.querySelector('form')
const errors = []

formEl.addEventListener('submit', function (e) {
	e.preventDefault()

	isCorrectEmail(e)
	isCorrectPassword(e)
	acceptRegulations(e)
	showErrors(e)
})

function isCorrectEmail(e) {
	const inpEmail = e.target.elements['login']
	const email = inpEmail.value

	if (emailValidation(email)) {
		clearErrors(inpEmail)
	} else {
		errors.push(inpEmail)
	}
}

function emailValidation(email) {
	const re = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,4}$/i
	const validEmail = email.match(re)
	if (validEmail) {
		return true
	}
}

function isCorrectPassword(e) {
	const inpPass1 = e.target.elements['pass1']
	const inpPass2 = e.target.elements['pass2']
	const pass1 = inpPass1.value
	const pass2 = inpPass2.value

	if (pass1.length > 6 && pass1 === pass2) {
		clearErrors(inpPass1)
		clearErrors(inpPass2)
	} else if (pass1.length > 6 && pass1 !== pass2) {
		console.log('Hasła do siebie nie pasują!')
		errors.push(inpPass1, inpPass2)
	} else {
		console.log('Hasło musi być dłuższe niż 6 znaków!')
		errors.push(inpPass1)
	}
}

function acceptRegulations(e) {
	const inpAccept = e.target.elements['accept']
	const checked = inpAccept.checked

	if (checked) {
		clearErrors(inpAccept)
	} else {
		errors.push(inpAccept)
	}
}

function showErrors() {
	errors.forEach(function (el) {
		const label = el.previousElementSibling
		label.style.color = 'red'
	})

	if (errors.length >= 1) {
		errors.splice(0, errors.length)
	} else {
		console.log('done')
	}
}

function clearErrors(el) {
	const label = el.previousElementSibling
	label.style.color = 'black'
}
