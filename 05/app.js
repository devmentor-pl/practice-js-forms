const formEl = document.querySelector('form');
const messages = document.querySelector('.messages');
let errors = [];
formEl.noValidate = true;

const nameField = formEl.elements['firstName'];
formEl.addEventListener('submit', checkName);

const lastNameField = formEl.elements['lastName'];
formEl.addEventListener('submit', checkLastName);


const streetField = formEl.elements['street'];
formEl.addEventListener('submit', checkStreetField);

const houseNumberField = formEl.elements['houseNumber'];
formEl.addEventListener('submit', checkHouseNumber);

const flatNumberField = formEl.elements['flatNumber'];
formEl.addEventListener('submit', checkFlatNumber);

const zipField = formEl.elements['zip'];
formEl.addEventListener('submit',checkZip);

const city = formEl.elements['city'];
formEl.addEventListener('submit', checkCity);

const voivodeship = formEl.elements['voivodeship'];
formEl.addEventListener('submit', checkVoiodeship);
formEl.addEventListener('submit', viewErrors);

function checkName(e) {
    const self = e.target;
    if(self.firstName.value === '' || self.firstName.value == null){
        errors.push('Imie jest wymagane');  
    }
}

function checkLastName(e){
    const self = e.target
    
    if(self.lastName.value === '' || self.lastName.value == null){
        errors.push('Nazwisko jest wymagane');   
    }
}

function checkStreetField(e){
    const self = e.target
    
    if(self.street.value === '' || self.street.value == null){
        errors.push('Ulica jest wymagana');   
    }
}

function checkHouseNumber(e){
    const self = e.target;
    
    if(self.houseNumber.value === '' || self.houseNumber.value == null){
        errors.push('Number budynku wymagany');
    }else if(Number(self.houseNumber.value) < 0 || isNaN(self.houseNumber.value)){
        errors.push('Nieprawidłowy numer budynku');
    }
}

function checkFlatNumber(e){
    const self = e.target;
   
    if(Number(self.flatNumber.value) < 0 || isNaN(self.flatNumber.value)){
        errors.push('Nieprawidłowy numer mieszkania');
    }
}

function checkZip(e){
    const self = e.target;
    
    if(self.zip.value === '' || self.zip.value == null){
        errors.push('kod pocztowy jest wymagany');
    }else if(!self.zip.value.match(/^\d{2}-\d{3}$/)){
        errors.push('Nieprawidłowy kod pocztowy');
    }
}

function checkCity(e){
    const self = e.target;
    
    if(self.city.value === '' || self.city.value == null){
        errors.push('miasto jest wymagane');
    }
}

function checkVoiodeship(e){
    const self = e.target;

    if(e.target.voivodeship.value === ''){
        errors.push('województwo jest wymagane');
    }
}

function viewErrors(e){
    e.preventDefault();

    messages.innerHTML = '';
    
    if(errors.length > 0){
        errors.forEach(err =>{
            const li = document.createElement('li');
            li.textContent = err;
            messages.appendChild(li);  
        });
    }
    errors = [];
}