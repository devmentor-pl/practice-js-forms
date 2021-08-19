const formEl = document.querySelector('form');
formEl.noValidate = true;
let errors = [];

formEl.addEventListener('submit', checkData);

function checkData(e) {
    e.preventDefault();
    const formElList = e.target.elements;
    checkEmail(formElList);
    checkPassword(formElList);
    isAccepted(formElList);
    errors.length > 0 ? showErrors() : console.log('DONE');
}

function checkEmail(formElList) {
    const email = formElList.login.value;
    const emailLabel = formElList.login.previousElementSibling;
    const regexpEmail = new RegExp('@');
    const hasMatchRegexp = regexpEmail.test(email);
    hasMatchRegexp ? emailLabel.style.color = '' : errors.push(emailLabel);
}

function checkPassword(formElList) {
    const pass1 = formElList.pass1.value;
    const pass1Label = formElList.pass1.previousElementSibling;
    const pass2 = formElList.pass2.value;
    const pass2Label = formElList.pass2.previousElementSibling;
    if (pass1 === pass2 && pass1.length > 6) {
        pass1Label.style.color = '';
        pass2Label.style.color = '';
    } else {
        errors.push(pass1Label, pass2Label);
    }
}

function isAccepted(formElList) {
    const regAcceptEl = formElList.accept;
    const regAcceptLabel = regAcceptEl.previousElementSibling;
    regAcceptEl.checked ? regAcceptLabel.style.color = '' : errors.push(regAcceptLabel);
}

function showErrors() {
    errors.forEach(err => {
        err.style.color = 'red';
    });
    errors = [];
}

