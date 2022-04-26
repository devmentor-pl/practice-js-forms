const formElement = document.querySelector('form')
const ulElement = document.querySelector('.users-list')

formElement.addEventListener('submit', addUser)

function addUser(e){
    e.preventDefault()
    
    const firstName = e.target.elements.firstName
    const lastName = e.target.elements.lastName
    const name = firstName.value + ' ' + lastName.value

    const newLiElement = createElement('li')
    newLiElement.textContent = name
   
}

function createElement(el){
    const newLiElement = document.createElement(el)
    newLiElement.classList.add('user-list__person')
    ulElement.appendChild(newLiElement)

    return newLiElement
}
