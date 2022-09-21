
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
        tag: 'select',
    },
];

const voivodeships = [
    'dolnośląskie', 'kujawsko-pomorskie', 'lubelskie', 'lubuskie', 
    'łódzkie', 'małopolskie', 'mazowieckie', 'opolskie', 'podkarpackie', 
    'podlaskie', 'pomorskie', 'śląskie', 'świętokrzystkie', 'warmińsko-mazurskie', 
    'wielkopolskie', 'zachodniopomorskie'
]

document.addEventListener('DOMContentLoaded', init);


function init(){
    const body = document.querySelector('body');
    const script = document.querySelector('script');
    const form = document.createElement('form');
    const messageList = document.createElement('ul');
    
    form.setAttribute('action', '');
    form.setAttribute('method', 'post');
    form.setAttribute('novalidate', '');
    body.insertBefore(form, script);
    body.insertBefore(messageList, form);
    
    fields.forEach(function(field){
        const {name, label, required = false, type = 'text', pattern = null, tag = 'input'} = field;

    
        const divEl = document.createElement('div');
        const labelEl = document.createElement('label');

        labelEl.innerText = label;
        if(tag === 'select'){
            const selectEl = document.createElement('select');
            selectEl.setAttribute('name', name);
            selectEl.setAttribute('required', required);
            selectEl.setAttribute('type', type);
            selectEl.setAttribute('pattern', pattern);
            for(let voivodeship of voivodeships){
                const optionEl = document.createElement('option');
                optionEl.innerText = voivodeship;
                selectEl.appendChild(optionEl);

            }
            labelEl.appendChild(selectEl);
        }else{
            const inputEl = document.createElement('input');
            labelEl.innerText = label;
            inputEl.setAttribute('name', name);
            inputEl.setAttribute('required', required);
            inputEl.setAttribute('type', type);
            inputEl.setAttribute('pattern', pattern);
            labelEl.appendChild(inputEl);
        }
        divEl.appendChild(labelEl);
        form.appendChild(divEl);
    })
    const divEl = document.createElement('div');
    const submitButton = document.createElement('button');

    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'Wyślij';
    divEl.appendChild(submitButton);
    form.appendChild(divEl);
    
    form.addEventListener('submit', checkData);
    
    function checkData(e){
        e.preventDefault();
        const errors = [];
        
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
                const reg = new RegExp(pattern);
                if(!reg.test(value)){
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
}


