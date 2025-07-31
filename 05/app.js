
const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
formEl.addEventListener('submit', checkData);
ulEl.classList.add('.messages');
formEl.noValidate = true;

function checkData(e) {
    
    e.preventDefault();
    const messages = [];
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship;

    if(firstName.length === 0) {
        messages.push('Field name is required');
    }
    if(lastName.length === 0) {
        messages.push('Field name is required');
    }
    if(street.length === 0) {
        messages.push('Field street is required');
    }
    if(houseNumber.length === 0) {
        messages.push('Field house number is required');
    }

    if((houseNumber.length > 0) && (houseNumber <= 0)) {
        messages.push('Incorrect house number');
    }
    if(flatNumber < 0) {
        messages.push('Incorrect flat number')
    }

    if (!(zip.match('^[0-9]{2}-[0-9]{3}$'))) {
        messages.push('Incorrect zip code');
    }

    if(city.length === 0) {
        messages.push('Field city is required');
    }

    // if(!voivodeship.selected) {
    //     messages.push('Select a province');
        
    // }

    if(messages.length > 0) {
        formEl.appendChild(ulEl);
        ulEl.innerHTML = '';
        messages.forEach(function(messages) {
            const newLi = document.createElement('li');
            newLi.innerText = messages;
            ulEl.appendChild(newLi);
            
           
        });
    } else {

        const message = document.querySelector('.messages');
        ulEl.innerHTML = '';
        if(message) {
            while (message.children.length > 0) {
                message.removeChild(message.lastElementChild);
            }
            alert('The form has been sent. Thank you.')
        }
        
    }
}