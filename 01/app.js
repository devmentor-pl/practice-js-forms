const form = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

const handleSubmit = function(e){
    e.preventDefault();
    
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    if (firstName && lastName) {
    
        const newLi = document.createElement('li');
        newLi.classList.add('users-list__person');

        newLi.innerText = `${firstName} ${lastName}`;
        ulEl.appendChild(newLi);

        e.target.elements.firstName.value = '';
        e.target.elements.lastName.value = '';

    } else {
        alert('Uzupełnij imię i nazwisko!')
    }

}

form.addEventListener('submit', handleSubmit);