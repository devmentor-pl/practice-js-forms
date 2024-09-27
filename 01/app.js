const firstName = document.querySelector('input[name="firstName"]')
const lastName = document.querySelector('input[name="lastName"]')
const formEl = document.querySelector('form')
const userList = document.querySelector('.users-list')

formEl.addEventListener('submit', changeFormMode)

function changeFormMode(e) {
    e.preventDefault()
    const newLiElement = document.createElement('li')
    newLiElement.classList.add('users-list__person')
    userList.appendChild(newLiElement)
    newLiElement.innerText = firstName.value + ' ' + lastName.value
}
