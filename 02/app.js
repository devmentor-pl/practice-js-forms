document.addEventListener('DOMContentLoaded', init);

function init(){
    const formEl = document.querySelector('form');
    const labelsList = document.querySelectorAll('label');

    if(formEl){
        formEl.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(e){
        e.preventDefault();
        const loginEl = e.target.elements.login;
        const pass1El = e.target.elements.pass1;
        const pass2El = e.target.elements.pass2;
        const acceptEl = e.target.elements.accept;
        const errors = [];
        if(isCorrectLogin(loginEl.value) === false){
            errors.push(loginEl.previousElementSibling);
        }
        if(isCorrectPassword(pass1El.value, pass2El.value) === false){
            errors.push(pass1El.previousElementSibling);
            errors.push(pass2El.previousElementSibling);
        }
        if(!acceptEl.checked){
            errors.push(acceptEl.previousElementSibling);
        }

        resetErrors();

        if(errors.length === 0) {
            console.log('done');
        } else {
            showErrors(errors);
        }
    }

    function isCorrectLogin(login) {
        return Boolean(login.includes('@'));
    }

    function isCorrectPassword(pass1, pass2){
        return Boolean(pass1 === pass2 && pass1.length > 6);
    }

    function resetErrors(){
        labelsList.forEach(function(item){
            item.style.color = '';
        });
    }

    function showErrors(errors){
        errors.forEach(function(item){
            item.style.color = 'red';
        });
    }
}

