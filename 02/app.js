const formEl = document.querySelector('form');

const printErrors = function (sel1, sel2) {
    let errors = [];

    sel1 ? errors.push(sel1) : false;
    sel2 ? errors.push(sel2) : false;
    if (errors.length > 0) {

        errors.forEach(function (item) {
            item.style.color = 'red';
        })
    } else {
        console.log('done');
    }
    // TO DO: reset jeśli są poprawne dane
}

const checkLogin = function (login) {
    if (login.value.length === 0 || !login.value.includes('@')) {
        printErrors(login.previousElementSibling);
    }
}

const checkPassword = function (password, passwordConfirm) {
    if (password.value.length <= 6 || passwordConfirm.value !== password.value) {
        printErrors(password.previousElementSibling, passwordConfirm.previousElementSibling);
    }
}

const checkAcceptReg = function (acceptReg) {
    if (!acceptReg.checked) {
        printErrors(acceptReg.previousElementSibling);
    }
}

const checkData = function (formElList) {
    const login = formElList.login;
    const password = formElList.pass1;
    const passwordConfirm = formElList.pass2;
    const acceptReg = formElList.accept;

    const loginErr = checkLogin(login);
    const passwordErr = checkPassword(password, passwordConfirm);
    const acceptRegErr = checkAcceptReg(acceptReg);

    // console.log(loginErr);
    // console.log(acceptReg);
}

const userRegister = function (e) {
    e.preventDefault();

    const formElList = e.target.elements;

    checkData(formElList)
    // printErrors(null, null)
}

formEl.addEventListener('submit', userRegister)
formEl.noValidate = true;