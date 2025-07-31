const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = formEl.elements[0].value;
    const lastName = formEl.elements['lastName'].value;
    const list = document.querySelector('.users-list');

    if (firstName.length > 0 && lastName.length > 0) {
        const liEl = document.createElement('li')
        liEl.classList.add('user-list__person');
        liEl.innerText = `${firstName} ${lastName}`
        list.appendChild(liEl);
    }

    if (firstName === '' ||  lastName === '') {
        alert('Wpisz imię i nazwisko')
    }
})