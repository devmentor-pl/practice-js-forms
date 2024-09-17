const formEl = document.querySelector('form')
formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    const firstName = e.target.elements.firstName
    const lastName = e.target.elements.lastName
    const ulUsers = document.querySelector('ul')
    const liElement = document.createElement('li')
    liElement.innerHTML = firstName.value + ' ' + lastName.value
    ulUsers.appendChild(liElement)
})