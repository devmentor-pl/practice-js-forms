const fields= [
    {name: 'firstName', label:'Imię', required: true},
    {name: 'lastName', label:'Nazwisko', required: true},
    {name: 'street', label:'Ulica', required: true},
    {name: 'houseNumber', label:'Numer budunku', required: true, type: 'number'},
    {name: 'flatNumber', label:'Numer mieszkania', type: 'number'},
    {name: 'zip', label:'Kod pocztowy', required: true, pattern:'[0-9]{2}-[0-9]{3}'},
    {name: 'city', label:'Miejscowość', required: true},
    {name: 'voivodeship', label:'Województwo', required: true},
];

const form = document.forms[0];
const ulEl = document.querySelector('.messages');


if(form){
form.addEventListener('submit', submitHandle);
};

function submitHandle (e){
    e.preventDefault();

    const errors = [];

    fields.forEach(field => {
        const value = form[field.name].value;

        if(field.required){
            if(!value){
                errors.push(`Pole ${field.label} musi być uzupełnione`)
            }
        }
        if(field.pattern){
            let reg = new RegExp(field.pattern);
            if(!reg.test(value)){
                errors.push(`Dane w polu ${field.label} mają niewłaściwy format`)
            }
        }
        if(field.type){
            if(isNaN(value)){
                errors.push(`Dane w polu ${field.label} muszą być cyframi`)
            }
        }
    });

    ulEl.innerHTML = '';
    if(errors.length === 0){
        alert('poprawnie uzupełnione dane');
        Array.from(form.elements).forEach(el => {
            el.value = ''
        })
    }else{
        errors.forEach(text =>{
            const liEl = document.createElement('li');
            liEl.innerText = text;
            ulEl.appendChild(liEl);
        })
    }
}