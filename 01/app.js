const form = document.querySelector("form")

if (form) {
    form.addEventListener('submit', handleSubmit)
}

function handleSubmit(event) {
    event.preventDefault()

    const firstName = form.elements[0].value
    const lastName = form.elements[1].value

    if (firstName.trim() && lastName.trim()) {
        createUserItem(firstName, lastName)
    } else alert("Niepoprawne dane")
}

function createUserItem(firstName, lastName) {
    const item = document.createElement('li')
    item.classList.add('users-list__person')
    item.textContent = firstName + ' ' + lastName
    addItemToList(item)
}

function addItemToList(user) {
    const list = document.querySelector('ul')
    if (list) {
        list.appendChild(user)
    }
}
