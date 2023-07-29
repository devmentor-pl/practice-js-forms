const formEl = document.querySelector('form')
const data1 = formEl.querySelector('input[name=firstName]')
const data2 = formEl.querySelector('input[name=lastName]')
const ul = document.querySelector('ul')
formEl.addEventListener('submit', function (e) {
	e.preventDefault()
	const name = e.target.elements.firstName.value
	const surname = e.target.elements.lastName.value
	const data = name + ' ' + surname
	if (name === '' || surname === '') {
		alert('Wpisz dane')
	} else {
		const li = document.createElement('li')
		li.classList.add('user-list__person')
		li.textContent = data
		ul.appendChild(li)
	}
})
