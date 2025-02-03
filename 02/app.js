const form = document.querySelector('form');

if (form){
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e){
    e.preventDefault();
    console.clear();

    const errors = [];
    const fields = [
        {
            name: 'login',
            label: 'E-mail',
            required: true,
            type: 'email',
            pattern: '@',
        },
        {
            name: 'pass1',
            label: 'Hasło',
            required: true,
            minLength: 6,
        },
        {
            name: 'pass2',
            label: 'Powtórz hasło',
            required: true,
        },
        {
            name: 'accept',
            label: 'Regulamin',
            required: true,
            type: 'checkbox',
        },
    ]

    fields.forEach((field) => {
        const {name, label, required = false, type = 'text', pattern = null, minLength = null} = field;
        const value = form.elements[name].value;
        const inputElement = form.elements[name];
        const labelElement = document.querySelector(`label[for="${inputElement.id}"]`);

        inputElement.style.border = '';
        if (labelElement){
            labelElement.style.color = '';
        }

        if (required) {
            if (type === 'checkbox' && !inputElement.checked) {
                errors.push({message: `Musisz zaznaczyć ${label}!`, element: inputElement, labelElement});
            } else if (value.length === 0) {
                errors.push({message: `Dane w polu ${label} są wymagane!`, element: inputElement, labelElement});
            }
        }

        if (pattern){
            const reg = new RegExp(pattern);
            if (!reg.test(value)){
                errors.push({ message: `Dane w polu ${label} powinny zawierać znak @!`, element: inputElement, labelElement });
            }
        }

        if (minLength && value.length < minLength){
            errors.push({ message: `Hasło musi mieć minimum ${minLength} znaków!`, element: inputElement, labelElement });
        }

        if (name === 'pass2'){
            const pass1Value = form.elements['pass1'].value;
            if (value !== pass1Value){
                errors.push({ message: 'Hasła muszą być takie same!', element: inputElement, labelElement });
            }
                
        }
    });

    if (errors.length === 0){
        console.log('done');

    } else {
        errors.forEach(({message, element, labelElement}) => {
            console.log(message);
            element.style.border = '1px solid red';
            if(labelElement) labelElement.style.color = 'red';
        })
    }
}

// BASIC SOLUTION:
//***********************************************************************************

// const form = document.querySelector('form');
// const inputLogin = document.querySelector('#formLogin');
// const labelForLogin = document.querySelector('label[for="formLogin"]');
// const labelForPass1 = document.querySelector('label[for="formPass1"]');
// const labelForPass2 = document.querySelector('label[for="formPass2"]');
// const inputPass1 = document.querySelector('#formPass1');
// const inputPass2 = document.querySelector('#formPass2');
// const labelForRegulations = document.querySelector('label[for="formAccept"]');
// const checkbox = document.querySelector('#formAccept');

// const validation = function(condition, label, errorMessage, element){
//     label.style.color = condition ? 'black' : 'red';

//     if(!condition){
//         errors.push(element);
//         errorMessages.push(errorMessage);
//     }
//     return condition;
// }

// const errors = [];
// const errorMessages = [];

// const handleSubmit = function(e){
//     e.preventDefault();

//     const validateEmail = validation(inputLogin.value.includes('@'), labelForLogin, 'Email musi zawierać @!', inputLogin);
//     const validatePass1 = validation(inputPass1.value.length >= 6, labelForPass1, 'Hasło musi się składać z minimum 6 znaków!', inputPass1);
//     const validatePass2 = validation(inputPass1.value === inputPass2.value, labelForPass2, 'Powtórzone hasło nie jest takie samo!', inputPass2);
//     const validateRegulations = validation(checkbox.checked, labelForRegulations, 'Musisz zaakceptować regulamin!', checkbox);

//     if (validateEmail && validatePass1 &&  validatePass2 && validateRegulations){
//         console.log('done');
//     }

//     if (errors.length > 0){

//         errors.forEach((element) => {
//             element.style.border = '1px solid red';
//         })
//         console.log('Wypelniony formularz zawiera ponizsze bledy: ')
//         errorMessages.forEach((msg) => {
//             console.log(msg);
//         })
//     }
// }

// form.addEventListener('submit', handleSubmit);
