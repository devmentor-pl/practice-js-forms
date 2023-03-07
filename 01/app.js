const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstNameValue = e.target.elements.firstName.value;
    const lastNameValue = e.target.elements.lastName.value;

    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.classList.add('user-list__person');
    li.innerText = firstNameValue + lastNameValue;

    ul.appendChild(li);
});