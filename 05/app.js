const form = document.querySelector('form')
const messages = document.querySelector('.messages')
const firstName = document.querySelector('input[name=firstName]')

const formElements = Array.from(form)

form.setAttribute('novalidate', true)

form.addEventListener('submit', e => {
	e.preventDefault()

	messages.textContent = ''

	formElements.forEach(input => {
		checkIfEmpty(input)

		if (input.name === 'zip' && input.value !== '') {
			const zipRegEx = /([0-9]{2}-[0-9]{3})/
			if (!zipRegEx.test(input.value)) {
				createMessage(input)
				input.style.border = '2px solid red'
			} else {
				input.style.border = '2px solid green'
			}
		}
	})

	if (messages.textContent === '') {
		alert('dane zostały wysłane')
		location.reload(true)
	}
})

function checkIfEmpty(input) {
	if (input.value === '' && input.type !== 'submit') {
		createMessage(input)
		// input.setCustomValidity('You gotta fill this out, yo!')
	} else if (input.type !== 'submit') {
		input.style.border = '2px solid green'
	}
}

function createMessage(input) {
	const newLi = document.createElement('li')
	const text = input.previousSibling.textContent
	newLi.innerHTML = 'Pole ' + text.bold() + ' nie zostało wypełnione'
	messages.append(newLi)
	input.style.border = '2px solid orange'
}
