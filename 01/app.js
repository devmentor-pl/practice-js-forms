
const form = document.forms[0]
const user = document.querySelector('.users-list')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    console.log('submit')
    event.preventDefault()

    const firstName = event.target.firstName
    console.log(firstName.value)
    const lastName = event.target.lastName
    console.log(lastName.value)

    if(firstName.value !== '' && lastName.value !== '') {
        const fullName = firstName.value +' '+ lastName.value

        const elementLi = document.createElement('li')
        elementLi.className = 'user-list__person'
        elementLi.innerText = fullName
        user.appendChild(elementLi)        
    }
}






