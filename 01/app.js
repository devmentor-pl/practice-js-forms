const formEl = document.querySelector('form')

formEl.addEventListener('submit', addUser)

function addUser(e) {
    e.preventDefault()

    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value

    if (firstName !== '' && lastName !== '') {
        const ulEl = document.querySelector('ul')
        const newLi = document.createElement('li')
        
        newLi.innerText = firstName + ' ' + lastName
        newLi.classList.add('users-list__person')
        ulEl.appendChild(newLi)

    } else {
        alert('Wprowadź wszystkie dane do formularza.')
    }
}