const formEl = document.querySelector('form');
formEl.addEventListener('submit', registerUser);


function registerUser(e) {
    const emailEl = document.querySelector('#formLogin');
    const pass1El = document.querySelector('#formPass1');
    const pass2El = document.querySelector('#formPass2');
    const accept = document.querySelector('#formAccept');
    if (!checkData(emailEl, pass1El, pass2El, accept)) {
        e.preventDefault();
    } else {
        console.log('done');
    }
}

function checkData(email, pass1, pass2, acc) {
    const errors = [];
    const userEmail = email.value;
    const pass1Value = pass1.value;
    const pass2Value = pass2.value;
    if (!userEmail.includes('@')) {
        errors.push(email);
    }
    if (pass1Value !== pass2Value || pass1Value.length <= 6) {
        errors.push(pass1);
        errors.push(pass2);
    }
    if (!acc.checked) {
        errors.push(acc)
    }
    console.log(errors);
    if (errors.length > 0) {
        email.parentNode.style.color = 'black';
        pass1.parentNode.style.color = 'black';
        pass2.parentNode.style.color = 'black';
        acc.parentNode.style.color = 'black';
        errors.forEach(function (err) {
            err.parentNode.style.color = 'red';
        })
    }
    return errors.length > 0 ? false : true;
}