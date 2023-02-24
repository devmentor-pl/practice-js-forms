const formEl = document.querySelector('form')
const errors = []
console.log(errors)

formEl.addEventListener('submit', function (e) {
	e.preventDefault()
	checkEmail(e)
	checkPassword(e)
	acceptRegulations(e)
	checkErrors(e)
})

function checkEmail(e) {
	const re = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,4}$/i
	const inpEmail = e.target.elements['login']
	const email = inpEmail.value
	const validEmail = email.match(re)
	if (validEmail) {
		console.log('Email OK')
	} else {
		errors.push(inpEmail)
	}
}

function checkPassword(e) {
	const inpPass1 = e.target.elements['pass1']
	const inpPass2 = e.target.elements['pass2']
	const pass1 = inpPass1.value
	const pass2 = inpPass2.value

	if (pass1.length > 6 && pass1 === pass2) {
		console.log('Hasło jest ok')
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
		console.log('Regulamin ok')
	} else {
		errors.push(inpAccept)
	}
}

function checkErrors(e) {
	errors.forEach(function (el) {
		const label = el.previousElementSibling
		label.style.color = 'red'
	})
}
