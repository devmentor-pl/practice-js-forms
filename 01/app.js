const formEl = document.querySelector('form')
const firstNameInputEl = document.querySelector('input[ name="firstName"]')
const lastNameInputEl = document.querySelector('input[ name="lastName"]')
const userList = document.querySelector('.users-list')


//listener
formEl.addEventListener('submit', (e)=> {
    e.preventDefault()

    const firstName = firstNameInputEl.value
    const lastName = lastNameInputEl.value
    
    const newUser = document.createElement('li')
    newUser.className = "users-list__person";
    
    newUser.textContent =`${firstName} ${lastName}`
    userList.appendChild(newUser)

    formEl.reset()
})

