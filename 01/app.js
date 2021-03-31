document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', getFormData);
})

const getFormData = (e) => {
    e.preventDefault();
    
    const firstName = document.getElementsByName('firstName')[0];
    const lastName = document.getElementsByName('lastName')[0];

    addNewUser(firstName, lastName);

    firstName.value = "";
    lastName.value = "";
}

const addNewUser = (firstName, lastName) => {
    const li = document.createElement('li');
    li.classList.add('user-list__person');
    li.textContent = firstName.value + lastName.value;
    document.querySelector('.users-list').appendChild(li);
}