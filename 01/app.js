const form = document.querySelector('form')
const formEl = form.elements
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {}
    const newLi = document.createElement('li')
    const usersList = document.querySelector('.users-list')
    for (let input of formEl) {
        if (input.type !== 'submit') user[input.name] = input.value
    }
    newLi.innerText = `${user.firstName} ${user.lastName}`
    newLi.classList.add('users-list__person')
    usersList.appendChild(newLi)
    form.reset()
    formEl[0].focus()
})