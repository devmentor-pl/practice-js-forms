const formEl = document.querySelector('form')
const usersList = formEl.nextElementSibling

formEl.addEventListener('submit', addUser)

function addUser(e) {
    e.preventDefault()
    
    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value

    if (!firstName && !lastName) {
        alert('You have to type Your first and last name!');
    } else {
        if (firstName) {
            if (lastName) {
                const newLi = document.createElement('li')
                newLi.classList.add('users-list__person')
            
                newLi.innerText = firstName + ' ' + lastName
            
                usersList.appendChild(newLi)
            } else {
                alert('You have to type Your last name!');
            }
        } else {
            alert('You have to type Your first name!');
        }
    }

}
