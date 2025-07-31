const formEl = document.querySelector('form');
formEl.noValidate = true;

formEl.addEventListener('submit', fillInTheForm);

function fillInTheForm(e) {

    e.preventDefault();

    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const confirm = e.target.elements.accept.value;

    if(!checkUserData (email, pass1, pass2, confirm)) {
        e.preventDefault();
    } else {
        console.log('done');
    }
}

function checkUserData(email, pass1, pass2, confirm) {
    const errors = [];
    if (!email.includes('@')) {
        errors.push(email);
    }
    if (pass1.value.length <= 6 || pass1 !== pass2) {
        errors.push(pass1);
        errors.push(pass2);
    }
    if (!confirm.checked) {
        errors.push(confirm);
        alert('please confirm regulations');
    }
    if(errors.length > 0) {
        errors.forEach(function(err) {
            err.previousElementSibling.style.color = 'red';
        })
    }
}