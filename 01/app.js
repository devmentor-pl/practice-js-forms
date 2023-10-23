const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const list = document.querySelector('.users-list');

let users = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {};
    inputs.forEach(input => data[input.name] = input.value);

    users.push(data);
    addElemenentToList(data);
});

function addElemenentToList(user) {
    const li = document.createElement('li');
    li.textContent = user.firstName + ' ' + user.lastName;
    list.appendChild(li);
}