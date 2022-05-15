document.addEventListener('DOMContentLoaded', init)

const formEl = document.querySelector('form')
const messagesList = formEl.querySelector('.messages')

let errors = []

function init() {    
    if(formEl) {
        formEl.setAttribute('novalidate', true)
        formEl.addEventListener('submit', handleSubmit)
    }    

    function handleSubmit(e) {
        e.preventDefault()
    
        const fields = [
            {name: 'firstName', label: 'Imię', required: true},
            {name: 'lastName', label: 'Nazwisko', required: true},
            {name: 'street', label: 'Ulica', required: true},
            {name: 'houseNumber', label: 'Numer budynku', type: 'number', required: true},
            {name: 'flatNumber', label: 'Numer mieszkania', type: 'number'},
            {name: 'zip', label: 'Kod pocztowy', pattern: '^[0-9]{2}-[0-9]{3}$', required: true},
            {name: 'city', label: 'Miejscowość', required: true},
            {name: 'voivodeship', label: 'Województwo', required: true},
        ]
        
        errors = []

        fields.forEach(function(field) {
            const value = formEl.elements[field.name].value
    
            if(field.required) {
                if(value.length === 0) {
                    errors.push('This field is mandatory. Please fill in ' + field.label + '.')
                }
            }
            if(field.type === 'number') {
                if(Number.isNaN(Number(value))) {
                    errors.push('Data in the field' + field.label + ' must be a number.')
                }
            }
            if(field.pattern) {
                const regExp = new RegExp(field.pattern)
                if(!regExp.test(value)) {
                    errors.push('Data in the field ' + field.label + ' must follow the pattern: 00-000.')
                }            
            }
        })

        messagesList.innerHTML = ''
        if(errors.length === 0) {
            alert('Data has been sent correctly!')
        } else {
            errors.forEach(function(err) {
                const liEl = document.createElement('li')
                liEl.innerText = err
                messagesList.appendChild(liEl)
            })
        }
    }    
}