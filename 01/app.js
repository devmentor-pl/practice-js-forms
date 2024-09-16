document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    const ulEl = document.querySelector('ul');
    
    formEl.addEventListener('submit', handleSubmit);    
    
    function handleSubmit(e) {
        e.preventDefault();
        const [firstNameEl, lastNameEl] = formEl.elements;
        const firstName = firstNameEl.value;
        const lastName = lastNameEl.value;
        const liEL = document.createElement('li');
        liEL.classList.add('user-list__person');
        liEL.innerText = `${firstName} ${lastName}`;
        ulEl.appendChild(liEL);
    }
 
}
