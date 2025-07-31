document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('form')
    console.log(formEl);
    
    if(formEl) {
        formEl.addEventListener('submit', handleSubmit)
    }
}
function handleSubmit(e) {
    e.preventDefault();
    
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    if(firstName !== '' && lastName !== '') {
        const liElement = document.createElement('li');
        liElement.classList.add('users-list__person');
        liElement.innerText = firstName + ' ' + lastName;

        const ulElement = e.target.nextElementSibling;
        ulElement.appendChild(liElement)
    } else {
        alert('Wprowadź dane');
    }

}
