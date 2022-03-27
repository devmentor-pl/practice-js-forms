const formEl = document.querySelector('form')
const userList = document.querySelector('.users-list')

const formHandler = function(e) {
    e.preventDefault() 
    const firstName = e.target.elements.firstName
    const lastName = e.target.elements.lastName 

    if(firstName.value !== '' && lastName.value !== '') {
        const liEl = document.createElement('li')
        userList.appendChild(liEl)

        liEl.classList.add('user-list__person')
        liEl.innerText = firstName.value + ' ' + lastName.value
    } else {
        alert('Element nie może być pusty. Wprowadź dane.')
    }
}

 formEl.addEventListener('submit', formHandler)
