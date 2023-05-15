const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const firstNameEl = e.target.elements.firstName;
    const lastNameEl = e.target.elements.lastName;

    const firstName = firstNameEl.value;
    const lastName = lastNameEl.value;

    if(firstName && lastName) {
        const liEl = document.createElement('li');
        liEl.innerText = `${firstName} ${lastName}`;
        liEl.classList.add('users-list__person');
    
        ulEl.appendChild(liEl)
      
        firstNameEl.value = '';
        lastNameEl.value = '';
    } else {
        alert('Podaj imię i nazwisko')
    }
}