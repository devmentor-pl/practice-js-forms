const userList = document.querySelector('ul')
const form = document.querySelector('form')

form.addEventListener('submit', addUser)

function addUser(e) {
    e.preventDefault()
    const firstName = e.target.elements['firstName'].value
    const lastName = e.target.elements['lastName'].value
    const liElement = document.createElement('li')
    liElement.innerText = `${firstName} ${lastName}`
    liElement.classList.add('user-list__person')
    userList.appendChild(liElement)
}