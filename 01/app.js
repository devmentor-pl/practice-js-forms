const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e);
        const firstName = form.querySelector('[name="firstName"]');
        const lastName = form.querySelector('[name="lastName"]');
        const li = document.createElement('li');
        li.classList.add('user-list__person');
        li.textContent = `${firstName.value} ${lastName.value}`;
        form.nextElementSibling.appendChild(li);
    });
};