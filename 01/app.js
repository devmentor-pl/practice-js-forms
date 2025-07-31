const formEl = document.querySelector('form')

const usersList = document.querySelector('.users-list')

const handleChange = e => {
	e.preventDefault()
	const firstName = e.target.elements['firstName'].value
	const lastName = e.target.elements['lastName'].value
	const inputElements = document.querySelectorAll('input[name=firstName], input[name=lastName]')
	if (firstName && lastName) {
		const newLi = document.createElement('li')
		newLi.classList.add('users-list__person')
		newLi.innerText = firstName + ' ' + lastName
		usersList.append(newLi)

		inputElements.forEach(el => {
			el.value = ''
		})
	}
}

formEl.addEventListener('submit', handleChange)
