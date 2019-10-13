const formEl = document.querySelector('form');

formEl.addEventListener('submit', e =>{
    e.preventDefault();

    const firstNameEl = e.target.elements.firstName;
    const lastNameEl = e.target.elements.lastName;

    const li = document.createElement('li');
    const ul = document.querySelector('.users-list');
    li.textContent = ` ${firstNameEl.value} ${lastNameEl.value}`;
    li.classList.add('users-list__person');
    ul.appendChild(li);

    formEl.reset();

});
