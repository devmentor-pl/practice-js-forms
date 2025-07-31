const formEl = document.querySelector('form');
formEl.setAttribute("novalidate", true);

formEl.addEventListener('submit' , checkFormFields)

function checkFormFields(e) {
    e.preventDefault()

    delateHints();
    createHints();
    delateErrors();

    const email = document.querySelector('[type = email]');
    const password1 = document.querySelector('[name = pass1]');
    const password2 = document.querySelector('[name = pass2]');
    const confirm = document.querySelector('[type = checkbox]');
    const formErrors = [];

    if(!email.value.includes('@')) {
        formErrors.push(email);
        email.nextElementSibling.innerText = 'Where is @?';
    }

    if(password1.value.length < 6) {
        formErrors.push(password1, password2);
        password1.nextElementSibling.innerText = 'Check your password (must have 6 characters)';
    }

    if(password1.value !== password2.value) {
        formErrors.push(password2);
        password2.nextElementSibling.innerText = 'The password is different from the first';
    }

    if(!confirm.checked) {
        formErrors.push(confirm);
        confirm.nextElementSibling.innerText = 'You must accept the rules';
    }

    if(formErrors.length > 0) {
        formErrors.forEach( function(el) {
            el.previousElementSibling.style.color = 'red';
        } )
    }

    else{
        console.log('done');
    }
}


function createHints() {
    const children = Array.from( formEl.children );

    children.forEach( function(child) {
        const hint = document.createElement('span');
        child.appendChild(hint);
    })
}


function delateHints() {
    const hints = document.querySelectorAll('span');
    hints.forEach(function(hint) {
        hint.remove();
    })
}

function delateErrors() {
    const labels = document.querySelectorAll('label');
    labels.forEach(function(el) {
        el.style.color = "";
    })
}

