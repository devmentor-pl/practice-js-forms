const formEl = document.querySelector('form')
const btnEl = document.querySelector('input[type="submit"]')
const ulEl = document.querySelector('ul')

btnEl.addEventListener('click', addUser)

function addUser(e) {
    e.preventDefault() 
    const firstNameInput = document.querySelector('input[name="firstName"]')
    const lastNameInput = document.querySelector('input[name="lastName"]')


    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    

    const newLi = document.createElement('li')
    newLi.classList.add('user-list__person')
    newLi.innerText = `${firstName} ${lastName}`
    ulEl.appendChild(newLi)
    
    firstNameInput.value = ''
    lastNameInput.value = ''
    
}
