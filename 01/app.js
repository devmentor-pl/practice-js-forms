const formEl = document.querySelector('form')

formEl.addEventListener('submit', function (e) {
	e.preventDefault()
	getUser(e)
})

function getUser(e) {
	const firstName = e.target.elements.firstName
	const lastName = e.target.elements.lastName

	if (firstName.value !== '' && lastName.value !== '') {
		addUserToList(firstName, lastName)
		clearInputs(firstName, lastName)
	} else {
		alert('Wprowadź wszystkie dane')
	}
}

function addUserToList(firstName, lastName) {
	const usersList = document.querySelector('.users-list')
	const newUser = document.createElement('li')
	newUser.classList.add('users-list__person')
	newUser.textContent = `${firstName.value} ${lastName.value}`
	usersList.appendChild(newUser)
}

function clearInputs(firstName, lastName) {
	firstName.value = ''
	lastName.value = ''
}
