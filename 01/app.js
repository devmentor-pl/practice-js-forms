const formElement = document.querySelector('form')
const ulElement = document.querySelector('.users-list')
formElement.addEventListener('submit', function (e) {
    e.preventDefault()
    const firstName = e.target.elements[0].value
    const lastName = e.target.elements[1].value
    const newLiElement = document.createElement('li')
    newLiElement.innerText = firstName + " " + lastName
    ulElement.appendChild(newLiElement)
})