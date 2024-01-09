const formEl = document.querySelector('form')

const register = e => {
	e.preventDefault()
	const pass1 = e.target.elements['pass1']
	const pass2 = e.target.elements['pass2']
	const email = e.target.elements['login']
	const checkbox = e.target.elements['accept']
	const checkboxSpan = document.querySelector('.checkbox-span')

	const pass1Value = pass1.value
	const pass2Value = pass2.value

	const errors = []

	// Check email
	const reg = /@/
	if (!reg.test(email.value)) {
		errors.push(email)
	} else {
		email.style.border = '2px solid green'
	}
	// Check password
	if (pass1Value.length < 6 || pass2Value.length < 6 || pass1Value !== pass2Value) {
		errors.push(pass1, pass2)
	} else {
		pass1.style.border = '2px solid green'
		pass2.style.border = '2px solid green'
	}

	// Submit
	if (errors.length > 0) {
		errors.forEach(err => {
			err.style.border = '2px solid orange'
		})
	} else if (errors.length === 0 && !checkbox.checked) {
		checkboxSpan.innerText = 'Please Confirm'
	} else {
		console.log('done')
	}
}
formEl.addEventListener('submit', register)
