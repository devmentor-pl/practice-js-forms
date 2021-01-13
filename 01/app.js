const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const newLi = document.createElement('li');
    const newText = document.createTextNode(firstName + ' ' + lastName);

    newLi.appendChild(newText);
    document.querySelector('.users-list').appendChild(newLi);
})