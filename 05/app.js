const form = document.querySelector('form');
form.noValidate = true;
const message = document.querySelector('.messages');



const checkData = function(e) {
    message.innerText = ''
    e.preventDefault();
    
    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const street = form.elements.street.value;
    const houseNumber = form.elements.houseNumber.value;
    const zip = form.elements.zip.value;
    const city = form.elements.city.value;
    const voivodeship = form.elements.voivodeship.value;
    const messages = []

    if(firstName.length < 2){
     messages.push('imię jest za krótkie')
        
    }
    
    if(lastName.length < 2){
     messages.push('nazwisko jest za krótkie')
        
    }
    if(street.length < 2){
     messages.push('nazwa ulicy jest zbyt krótka')
        
    }
    if(!houseNumber){
     messages.push('wprowadz numer domu')
        
    }
    if(!zip){
     messages.push('wprowadz kod pocztowy')
        
    }
    if(city.length < 2){
     messages.push('nazwa miasta jest zbyt krótka')
        
    }
    if(!voivodeship){
     messages.push('wybierz województwo')
        
    }
    if(firstName && lastName && street && houseNumber && zip && city && voivodeship) {
        console.log('dane wysłane prawidłowo')
    } 
   if(messages.length > 0){
    messages.forEach(function(mes){
        const li = document.createElement('li');
        li.innerText = mes;
        message.appendChild(li);
    })
   }
    
    
}
form.addEventListener('submit',checkData);