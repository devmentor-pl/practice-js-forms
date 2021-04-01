const form = document.querySelector('form');
const nameInpt = document.querySelector('input[name="firstName"]');
const lastNameInpt = document.querySelector('input[name="lastName"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInpt.value;
    const lastName = lastNameInpt.value;

    const li = document.createElement('li');
    li.textContent = `${name} ${lastName}`;
    li.setAttribute('class', 'users-list__person');
    document.querySelector('ul.users-list').appendChild(li);

    nameInpt.value = '';
    lastNameInpt.value = '';
})