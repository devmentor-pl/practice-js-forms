const form = document.querySelector('form');
form.noValidate = true;
const messages = document.querySelector('.messages');
const btn = document.querySelector('[type="submit"]');
const required = form.querySelectorAll("[required]");
const postCode = form.querySelector('[name="zip"]');
let errors = [];

form.addEventListener('submit', function(el){
    el.preventDefault();

    required.forEach(function(e){

        
        if(e.value.length === 0) {
            e.style.border = '1px solid red';

            if(e.name === 'voivodeship') {
                errors.push('Please enter the Województwo');    //jak tutaj wyłapać samą wartość województwo? 
            }                                                   //innerText wpowadza cały tekst z option :)
            else {
                errors.push('Please enter the ' + e.parentElement.innerText);
            }
        }
        else {
            e.style.border = '1px solid green';
        }

    });
 
    if (postCode.value.charAt(2) !== '-' || postCode.value.length < 6){     //nie wiedziałem jak zablokować możliwość wpisywania liter :)
        errors.push('Post code is incorrect');
        postCode.style.border = '1px solid red';
    }
    else {
        postCode.style.border = '1px solid green';
    }

    if (errors.length > 0){
        messages.innerText = '';

        errors.forEach(function(el){
            const newLi = document.createElement('li');
            messages.appendChild(newLi);
            newLi.innerText = el;
        });

        errors = [];

    }
    else {
        messages.innerText = '';
        alert('Done');
        errors = [];
    }
});