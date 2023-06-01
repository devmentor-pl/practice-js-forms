const registerForm = document.querySelector('form')
registerForm.noValidate = true
const checkbox = document.querySelector('#formAccept')
const pass = document.querySelector('#formPass1')
const pass2 = document.querySelector('#formPass2')
const email = document.querySelector('#formLogin')
const sendBtn = document.querySelector("input[type='submit']")

const showError = input => {
	const formBox = input.previousElementSibling
	formBox.style.color = 'red'
}

const clearError = input => {
	const formBox = input.previousElementSibling
	formBox.style.color = 'black'
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '' ) {
			showError(el)
		}else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length <= min) {
		showError(input, min)
	} else {
		clearError(input, min)
	}
}

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, pass1)
	}
}

const checkEmail = email => {
	const emailText = email.value

	if (emailText.includes('@')) {
		clearError(email)
	} else {
		showError(email)
	}
}
const checkAccept = el => {
	if (el.checked === false) {
	showError(el)
	}else{
        clearError(el)
    }
}

const checkErrors = () => {
    const allInputs=document.querySelectorAll('label')
	let errorCount = 0
    
	allInputs.forEach(el => {
        if (el.style.color==='red') {
			errorCount++
            console.log(el,errorCount);
		}
	})
	if (errorCount === 0) {
	clearError(el)
		console.log('done')
	}
}
registerForm.addEventListener('submit', e => {
	e.preventDefault()
	checkAccept(checkbox)
	checkLength(pass, 6)
	checkLength(pass2, 6)
	checkPassword(pass, pass2)
	checkEmail(email)
	checkForm([pass, pass2, email])
    checkErrors()
	
})

