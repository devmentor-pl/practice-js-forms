document.addEventListener('DOMContentLoaded', init);

const formEl = document.querySelector('form');
const ulELement = document.querySelector('.messages');
function init(){
    formEl.noValidate = true;
    if(formEl){
        formEl.addEventListener('submit', validationCheck); 
    }
}


function validationCheck(e) {


    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.lastName.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;
    const errors = [];

    // Check errors
    if(firstName.length === 0) {
        addErrors(e.target.elements.firstName.name, errors);
    }

    if(lastName.length === 0) {
        addErrors(e.target.elements.lastName.name, errors);
    }

    if(street.length === 0) {
        addErrors(e.target.elements.street.name, errors);
    }

    if(houseNumber.length === 0 && Number(houseNumber) <= 0) {
        addErrors(e.target.elements.houseNumber.name, errors);
    }

    if(flatNumber.length === 0 && Number(flatNumber) <= 0) {
        addErrors(e.target.elements.flatNumber.name, errors);
    }

    if(zip.length === 0) {
        addErrors(e.target.elements.zip.name, errors);
    }

    // Zip match check correct zip code
    if(!zip.match(/^\d\d-\d\d\d$/)){
        addErrors(e.target.elements.zip.name, errors);
    }

    if(city.length === 0) {
        addErrors(e.target.elements.city.name, errors);
    }

    if(voivodeship.length === 0) {
        addErrors(e.target.elements.voivodeship.name, errors);
    }
    
    if(errors.length > 0) {
        e.preventDefault();
        ulELement.innerHTML = '';

        errors.forEach(function(el){
            const liElement = document.createElement('li');
            
            liElement.innerText = el;
            liElement.style.color = 'red';
            ulELement.appendChild(liElement);
        });
    } else {
        ulELement.innerHTML = '';
        const curr = e.target.elements;

        clearErrors(curr);
        e.preventDefault();
    }
}

function addErrors(field, errors){
    errors.push(`Current filed ${field} is required!`);
}

function clearErrors(data){
    for(let i = 0; i < data.length; i++){
        data[i].value = '';
    }
}