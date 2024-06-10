const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list')

formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();

    const firstName = formEl.elements['firstName'].value
    const lastName = formEl.elements['lastName'].value

    if(firstName && lastName) {
        const newLi = document.createElement('li')
        newLi.classList.add('user-list__person')
        newLi.textContent = firstName + ' ' + lastName
        ulEl.appendChild(newLi)
    }
}
