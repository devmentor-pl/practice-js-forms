const usersList = document.querySelector('.users-list')
const user = document.createElement('li')
user.classList.add('users-list__person')
usersList.appendChild(user);


const formEl = document.querySelector('form');
formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    user.innerText = firstName + " "+ lastName
})


