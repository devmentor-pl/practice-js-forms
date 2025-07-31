const formEl = document.querySelector('form');
if (formEl) {
    formEl.addEventListener('submit', addUser)
}

function addUser(e) {
    e.preventDefault()

    const firstNameEl = e.target.elements.firstName
    const lastNameEl = e.target.elements.lastName
    const firstName = firstNameEl.value
    const lastName = lastNameEl.value

    if (firstName.length === 0 || lastName.length === 0) {
        alert("input first name and last name")
    } else {
        const userList = document.querySelector('.users-list');
        const newUser = firstName + ' ' + lastName
        const newLi = document.createElement('li');
        newLi.innerText = newUser
        newLi.classList.add('users-list__person')
        userList.appendChild(newLi)
        firstNameEl.value = ''
        lastNameEl.value = ''
    }
}
