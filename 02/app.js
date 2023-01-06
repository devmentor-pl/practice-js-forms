const formEl = document.querySelector('form');

const checkData = function (formElList) {
    const login = formElList.login;
    const password = formElList.pass1;
    const passwordConfirm = formElList.pass2;
    const acceptReg = formElList.accept;

    const errors = [];


    if (login.value.length === 0 || !login.value.includes('@')) {
        errors.push(login.previousElementSibling);
    }

    if (password.value.length <= 6) {
        errors.push(password.previousElementSibling);
    }

    if (passwordConfirm.value !== password.value) {
        errors.push(passwordConfirm.previousElementSibling);
    }

    if (!acceptReg.checked) {
        errors.push(acceptReg.previousElementSibling);
    }

    if (errors.length > 0) {
        errors.forEach(function (item) {
            item.style.color = 'red';

        })
    }

    return errors;
}

const userRegister = function (e) {
    e.preventDefault();

    const formElList = e.target.elements;

    const errors = checkData(formElList);

    if (errors.length === 0) {
        console.log('done');
    }
}

formEl.addEventListener('submit', userRegister)
formEl.noValidate = true;