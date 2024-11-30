const formElement = document.querySelector('form');
const ulElement = document.querySelector('ul');

if(formElement){
    formElement.addEventListener('submit', handleSubmit);
}

function handleSubmit(e){
    e.preventDefault();

    const fields = [
    {name: 'firstName', label: 'Imię', required: true},
    {name: 'lastName', label: 'Nazwisko', required: true},
    {name: 'street', label: 'Ulica', required: true},
    {name: 'houseNumber', label: 'Numer budunku', required: true},
    {name: 'flatNumber', label: 'Numer mieszkania', required: false},
    {name: 'zip', label: 'Kod pocztowy', pattern:"[0-9]{2}-[0-9]{3}", required: true},
    {name: 'city', label: 'Miejscowość', required: true},
    {name: 'voivodeship', label: 'Województwo', required: true},
    ];

    // const firstNameEl = formElement.elements.firstName;
    // const lastNameEl = formElement.elements.lastName;
    // const streetEl = formElement.elements.street;
    // const houseNumberEl = formElement.elements.houseNumber;
    // const flatNumberEl = formElement.elements.flatNumber;
    // const zipEl = formElement.elements.zip;
    // const cityEl = formElement.elements.city;
    // const voivodeshipEl = formElement.elements.voivodeship;

    const errors = []; 

    fields.forEach(function(field){
        const value = formElement.elements[field.name].value;

        if(field.required){
            if(value.length === 0){
                errors.push('Error in ' + field.label + ' field!')
            }
        }

        if(field.type === 'number'){
            if(Number.isNaN(value)){
                errors.push('Error in ' + field.label + ' field! (Number required!')
            }
        }

        if(field.pattern){
            const reg = new RegExp(field.pattern)
            if(!reg.test(value)){
                errors.push('Error in ' + field.label + ' field! ' + ' Please use pattern: ' + field.pattern + '!');
            }
        }
    });

    ulElement.innerHTML = '';
    if(errors.length === 0){
        alert('Thank you for filling out the form.')
    }else{
        errors.forEach(function(message){
            const liElement = document.createElement('li');
            liElement.innerText = message;
            ulElement.appendChild(liElement);
            console.log(message)
        });
    }
console.log(errors);
}