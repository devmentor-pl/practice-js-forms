const formEl = document.querySelector('form');

const showErrors = function (errorsList) {
    errorsList.forEach(function (error) {
        error.style.color = 'red';
    })
}
const checkData = function (formElList) {
    const login = formElList.login;
    const password = formElList.pass1;
    const passwordConfirm = formElList.pass2;
    const acceptReg = formElList.accept;
    const errorsList = [];


    for (const key of formElList) {
        if (key.type !== "submit") {
            key.previousElementSibling.style.color = 'black';
        }
    }

    if (login.value.length === 0 || !login.value.includes('@')) {
        errorsList.push(login.previousElementSibling);
    }

    if (password.value.length <= 6) {
        errorsList.push(password.previousElementSibling);
    }

    if (passwordConfirm.value !== password.value) {
        errorsList.push(passwordConfirm.previousElementSibling);
    }

    if (!acceptReg.checked) {
        errorsList.push(acceptReg.previousElementSibling);
    }

    if (errorsList.length > 0) {
        showErrors(errorsList);
    } else {
        console.log('done');
    }
}

const userRegister = function (e) {
    e.preventDefault();
    checkData(e.target.elements);
}

formEl.addEventListener('submit', userRegister)
formEl.noValidate = true;