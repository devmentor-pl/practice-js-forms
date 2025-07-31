const fields = [
    {name: 'login', label: 'email', required: true, pattern: '^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$'},
    {name: 'pass1', label: 'password1', required: true, minLength: 6},
    {name: 'pass2', label: 'password2', required: true, repeated: true},
    {name: 'accept', label: 'I accept regulations', required: true, type: 'checkbox'}
]


const form = document.forms[0];
const ulEl = document.createElement('ul');

document.body.insertAdjacentElement('beforeend', ulEl);


if (form){
form.addEventListener('submit', submitHandle);
}

function submitHandle(e) {
    e.preventDefault();

    const errors = [];
    
    fields.forEach(function (field) {
        const value = form[field.name].value;
        const pass1 = form['pass1'].value;
        const pass2 = form['pass2'].value;
        const isChecked = form[field.name].checked;
    
        
        if(field.required){
            if(field.type === 'checkbox'){
                if(!isChecked){
                    errors.push('Musisz akceptować warunki regulaminu!')
                }
            }
            else{
                if (value.length === 0){
                errors.push('dane w polu '+ field.label + ' są wymagane.');
                }
            }
        }

        if(value.length > 0){
            if (field.pattern){
                const reg = new RegExp(field.pattern);
                if(!reg.test(value)){
                    errors.push('Niepoprawny e-mail');
                }
            }
            if(field.minLength){
                if(value.length < field.minLength){
                    errors.push('Hasło za krótkie');
                }
            }    
        }    
    
        if(field.repeated){
            if(pass1 !== pass2){
            errors.push('hasła nie są takie same!')
            }
        }


    })
    
    ulEl.innerText = '';
    if(errors.length === 0){
        alert('poprawne dane');
        Array.from(form.elements).forEach(function(el){
            el.value = '';
        })
    } else{
        errors.forEach(function (text){
            const liEl = document.createElement('li');
            liEl.innerText = text;
            ulEl.appendChild(liEl);

        })
    }
}

