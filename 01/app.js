const formEl = document.querySelector('form');
const ulList = document.querySelector('.users-list');

formEl.addEventListener('submit', updateList.bind(this, ulList));


function updateList(list, e) {

    e.preventDefault();

    const firstName = e.target.elements['firstName'].value;
    const lastName = e.target.elements['lastName'].value;

    if ((firstName.trim() !== '') && (lastName.trim() !== '')) {
                
        const name = firstName + ' ' + lastName;
        addPersonToList(list, name);
    }     
}

function addPersonToList(list, name) {

    const newItem = document.createElement('li');
    newItem.className = 'user-list__person';
    newItem.textContent = name; 

    list.appendChild(newItem);

}