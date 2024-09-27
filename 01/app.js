const formEl = document.querySelector('form');

formEl.addEventListener('submit', addName)

function addName(e) {
    e.preventDefault();

    const firstName = document.querySelector('input[name="firstName"]');
    const lastName = document.querySelector('input[name="lastName"]');
    const fullName = firstName.value + ' ' + lastName.value;

    const ulEl = document.querySelector('ul');
    const newLiEl = document.createElement('li');
    newLiEl.classList.add('user-list__person');
    newLiEl.innerText = fullName

    ulEl.appendChild(newLiEl)
}