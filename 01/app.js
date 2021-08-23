const formEl = document.querySelector('form');
const ulELement = document.createElement('ul');
const body = document.body;
formEl.addEventListener('submit', showText);


function showText(e){
    e.preventDefault();

    const firstName = e.target.elements['firstName'];
    const lastName = e.target.elements['lastName'];
    const nameList = document.querySelector('.users-list');
    const nameItem = document.createElement('li');
    const errors= [];


    if(firstName.value.length === 0){
        errors.push(`First name are missing!`);
    }

    if(lastName.value.length === 0) {
        errors.push(`Last name is missing!`);
    }

    if(errors.length > 0) {
        e.preventDefault();
        
        ulELement.innerHTML = '';
        body.insertBefore(ulELement, formEl);

        errors.forEach(function(el){
            const liElement = document.createElement('li');
            
            liElement.innerText = el;
            liElement.style.color = 'red';
            ulELement.appendChild(liElement);
        });
    } else {
        ulELement.innerHTML = '';
        nameItem.classList.add('users-list__person');
        nameItem.innerText = `${firstName.value} ${lastName.value}`;
        nameList.appendChild(nameItem);
    }
    
    
}