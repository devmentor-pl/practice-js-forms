const formEl = document.querySelector('form');
const listEl = document.querySelector('.users-list');

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    let firstName = e.target.elements[0].value;
    let lastName = e.target.elements[1].value;
    const liEl = document.createElement('li');
    liEl.classList.add('users-list__person');
    liEl.innerText = `${firstName} ${lastName}`;
    listEl.appendChild(liEl);
    firstName.value = "";
    lastName.value = "";
});