const formEl = document.querySelector('form');
const ulElement = document.querySelector('.users-list');

formEl.addEventListener('submit', saveUserData);

function saveUserData(e){
    e.preventDefault();
    
    const firstNameEl = formEl.elements[0].value;
    const lastNameEl = formEl.elements[1].value;

    if(firstNameEl !== '' && lastNameEl !== ''){
        const newLi = document.createElement('li');
        newLi.classList.add('user-list__person');
        newLi.innerText = firstNameEl + ' ' + lastNameEl;
        
        ulElement.appendChild(newLi);
    }
}