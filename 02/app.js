const formEl = document.querySelector('form');
formEl.noValidate = true;
formEl.addEventListener('submit', checkValidation);





function checkValidation(e) {
    e.preventDefault();

    const errors = [];
    const emailEl = e.target.elements.login;
    const passwordEl = e.target.elements.pass1;
    const repeatPasswordEl = e.target.elements.pass2;
    const acceptEl = e.target.elements.accept;
    const emailPattern = /^([a-zA-Z0-9]{4,20})@([a-zA-Z]{2,20})\.(com|pl|edu|net)$/;


    if (!emailEl.value.match(emailPattern)) {
        errors.push(emailEl);
    }

    if (passwordEl.value !== repeatPasswordEl.value || passwordEl.value.length < 6) {
        errors.push(passwordEl);
        errors.push(repeatPasswordEl);
    }

    if (!acceptEl.checked) {
        errors.push(acceptEl);
    }

    if (errors.length > 0) {
        errors.forEach((error) => {
            error.previousElementSibling.style.color = 'red';
        });
    }
    else {
        console.log('done');
    }
}