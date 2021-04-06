document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', getFormData);
    console.log(form.firstName)
})

const getFormData = (e) => {
    e.preventDefault();
    
    const firstName = e.target.firstName;
    const lastName = e.target.lastName;

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