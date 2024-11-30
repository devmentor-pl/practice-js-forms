document.addEventListener('DOMContentLoaded', init)


function init() {

    // console.log('DOM')

    const formEl = document.querySelector('form')

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)
    }
}

function handleSubmit(e) {
    e.preventDefault()
    // console.log('submit')
    
    // console.log(e.target.elements)

    const firstNameEl = e.target.elements.firstName
    const lastNameEl = e.target.elements.lastName

    const firstName = firstNameEl.value
    const lastName = lastNameEl.value

    // console.log(firstName, lastName)

    if(firstName !== '' && lastName !== ''){
    const liElement = document.createElement('li')
    liElement.classList.add('users-list__person')
    liElement.innerText = firstName + ' ' + lastName

    const ulElement = e.target.nextElementSibling
    ulElement.appendChild(liElement)

    firstNameEl.value = ''
    lastNameEl.value = ''

    }else{
        alert('Wprowadź dane do formularza')
    }
}

