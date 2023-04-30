document.addEventListener('DOMContentLoaded', init)


function init() {

    // console.log('DOM')

    const formE1 = document.querySelector('form')

    if (formE1) {
        formE1.addEventListener('submit', handleSubmit)
    }
}

function handleSubmit(e) {
    e.preventDefault()
    // console.log('submit')
    
    // console.log(e.target.elements)

    const firstNameE1 = e.target.elements.firstName
    const lastNameE1 = e.target.elements.lastName

    const firstName = firstNameE1.value
    const lastName = lastNameE1.value

    // console.log(firstName, lastName)

    if(firstName !== '' && lastName !== ''){
    const liElement = document.createElement('li')
    liElement.classList.add('users-list__person')
    liElement.innerText = firstName + ' ' + lastName

    const ulElement = e.target.nextElementSibling
    ulElement.appendChild(liElement)

    firstNameE1.value = ''
    lastNameE1.value = ''

    }else{
        alert('Wprowadź dane do formularza')
    }
}

