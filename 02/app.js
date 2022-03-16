const registerForm = document.querySelector('form');
const errors = [];
const corrected = [];

registerForm.addEventListener('submit', checkData)

function checkData(e) {
    const loginEmail = e.target.elements.login
    const pass1 = e.target.elements.pass1;
    const pass2 = e.target.elements.pass2;
    const accept = e.target.elements.accept;

    const loginEmailLabel = loginEmail.previousElementSibling;
    const pass1Label = pass1.previousElementSibling;
    const pass2Label = pass2.previousElementSibling;
    const acceptLabel = accept.previousElementSibling;

    if(!loginEmail.value.includes('@')) {
        errors.push(loginEmailLabel);
    } else if(loginEmail.value.includes('@')) {
        checkAgain(errors, corrected, loginEmailLabel)
    }
    if(pass1.value.length <= 6) {
        errors.push(pass1Label);
    } else if(pass1.value.length > 6) {
        checkAgain(errors, corrected, pass1Label)
    }
    if(pass1.value !== pass2.value || pass2.value === '') {
        errors.push(pass2Label);
    } else if(pass1.value === pass2.value || pass2.value !== '') {
        checkAgain(errors, corrected, pass2Label)
    }
    if(!accept.checked) {
        errors.push(acceptLabel);
    } else if(accept.checked) {
        checkAgain(errors, corrected, acceptLabel)
    }

    if(errors.length > 0) {
        e.preventDefault();
        errors.forEach(function(element) {
            element.style.color = 'red';
        })
        corrected.forEach(function(element) {
            element.style.color = 'black';
        })
    } else {
        console.log('done');
    }

};

function checkAgain(err, corr, el) {
    corr.push(el);
    err.shift();
}
