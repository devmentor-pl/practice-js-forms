const form = document.querySelector('form');
const messageList = form.querySelector('.messages');

if(form){
    form.addEventListener('submit', checkData)
}

function checkData(e){
    e.preventDefault();
    const errors = [];
    const fields = [
        {
            name: 'firstName',
            label: 'Imię',
            required: true,
            pattern: '^[a-zA-Z –-]+$',
        },
        {
            name: 'lastName',
            label: 'Nazwisko',
            required: true,
            pattern: '^[a-zA-Z –-]+$',
        },
        {
            name: 'street',
            label: 'Ulica',
            required: true,
        },
        {
            name: 'houseNumber',
            label: 'Numer budynku',
            required: true,
            type: 'number',
        },
        {
            name: 'flatNumber',
            label: 'Numer mieszkania',
            type: 'number',
        },
        {
            name: 'zip',
            label: 'Kod pocztowy',
            required: true,
            pattern: '[0-9]{2}-[0-9]{3}',
        },
        {
            name: 'city',
            label: 'Miejscowość',
            required: true,
            pattern: '^[a-zA-Z –-]+$',
        },
        {
            name: 'voivodeship',
            label: 'Województwo',
            required: true,
        },
    ];
    
    fields.forEach(function(field){
        const {name, label, required = false, type = 'text', pattern = null} = field;

        const value = form.elements[name].value;

        if(required){
            if(value.length === 0){
                errors.push('Field ' + label + ' is required!');
            }
        }
        if(type === 'number'){
            if(Number.isNaN(Number(value))){
                errors.push('Field ' + label + ' contains invalid number!');
            }
        }
        if(pattern){
            const pattern = new RegExp(pattern);
            if(!pattern.test(value)){
                errors.push('Field ' + label + ' is invalid!');
            }
        }
    })

    messageList.innerHTML = '';
    
    if(errors.length === 0){
        alert('Provided data is valid');
        fields.forEach(function(field){
            form[field.name].value = '';
        })
    }else{
        errors.forEach((function(error){
            const liEl = document.createElement('li');
            liEl.innerText = error;
            
            messageList.appendChild(liEl);
        }))
    }
}
