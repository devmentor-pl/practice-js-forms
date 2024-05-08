const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    const firstNameEl = e.target.elements.firstName;
    const lastNameEl = e.target.elements.lastName;
    
    const firstName = firstNameEl.value;
    const lastName = lastNameEl.value;
    
    const text = firstName + " " + lastName;
    
    if (firstName !== '' && lastName !== ''){
        const newLi = document.createElement('li');
        newLi.classList.add('users-list__person');
        newLi.innerText = text;
        ulEl.appendChild(newLi);
    
        firstNameEl.value = '';
        lastNameEl.value = '';
    } else {
        alert('Wprowadź dane!')
    }
});