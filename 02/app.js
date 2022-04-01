const formEl = document.querySelector('form');

formEl.addEventListener('submit',validateForm);
formEl.noValidate =  true;

function validateForm(e){
     
    e.preventDefault();
    resetLabel(e.target);
    
    const err = checkInputs(e.target);
    
    if (err.length > 0) {
        showErros(err);
    }
    else
        console.log('Done');
}

function checkInputs(form) {

    const errors = [];

    const login = form.elements['login'];
    const pass1 = form.elements['pass1'];
    const pass2 = form.elements['pass2'];
    const accept = form.elements['accept'];

    if (!isValidEmail(login.value)) {
        errors.push(login);
    }
    
    if (!isValidPassword(pass1.value)) {
        errors.push(pass1);
    }

    if (!isConfirmPass(pass1.value, pass2.value)) {
        errors.push(pass2);
    }

    if (!accept.checked) {
        errors.push(accept);
    }

    return errors;
}

function showErros(err)
{
    err.forEach(function(el){el.previousElementSibling.style.color = 'red'});
}

function resetLabel(form) {

    const labels = form.querySelectorAll('label');
    
    labels.forEach(function(label){label.style.color = 'black' });
}

function isValidEmail(email) {
    
    let reg = /@/;
    
    if (!reg.test(email)) {
        return false;
    }
    
    return true;
}

function isValidPassword(pass) {

    if (pass.length < 6) {
        return false;
    }
    
    return true;
}

function isConfirmPass(pass1, pass2) {

    if (pass1 !== pass2) {
        return false;
    }
    
    return true;
}




