const formEl = document.querySelector('form');

const ulEl = document.createElement('ul');
ulEl.classList.add('errors');
formEl.noValidate = true;

formEl.addEventListener('submit', checkData);
function checkData(e) {
    e.preventDefault();
    
    const login = e.target.elements.login.value;
    
    const errors = [];

    if(login.length === 0) {
        errors.push('Enter your email');
    
    }
    if((!login.includes('@')) && (login.length > 0)) {
        errors.push('Email need @ sign!');
        //login.parentElement.children[0].style.color = 'red';
        
    
    } 

    const passFirst = e.target.elements.pass1;

    const passSecond = e.target.elements.pass2;

    if(passFirst.value !== passSecond.value) {
        errors.push('Different passwords');
        
    }

    if(passFirst.value.length < 6) {
        errors.push('Password shorter than 6 characters');

    }

    const acceptRegulations = e.target.elements.accept;

    if(!acceptRegulations.checked) {
        errors.push('You did not accept the regulations');
        
    }
    
    if(errors.length > 0) {
        formEl.appendChild(ulEl);
        ulEl.innerHTML = '';
        errors.forEach(function(errors) {
            
            const newLi = document.createElement('li');
            newLi.innerText = errors;
            ulEl.appendChild(newLi);
            
           
        });
    } else {

        const errors = document.querySelector('.errors');

        if(errors) {
            while (errors.children.length > 0) {
                errors.removeChild(errors.lastElementChild);
            }
        }
        
        console.log('Done');
        
        
    }

}