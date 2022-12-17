const formList = document.querySelector('form');
const labelList = document.querySelectorAll('label');


formList.addEventListener('submit', checkData);

function checkData(e) {
    e.preventDefault();


    const login = formList.login;
    const password1 = formList.pass1;
    const password2 = formList.pass2;
    const accept = formList.accept;

    const errors = [];

    if (!login.value.includes('@')) {
        errors.push(login.previousElementSibling);
        console.log('login error');
    };
    if (password1.value !== password2.value) {
        errors.push(password1.previousElementSibling);
        console.log('password1 and password2 are not the same !')

    };
    if (password1.value.length <= 6) {
        errors.push(password1.previousElementSibling)
        console.log('password1 must have at least 6 characters !')

    };
    if (password2.value.length <= 6) {
        errors.push(password2.previousElementSibling)
        console.log('password2 must have at least 6 characters !')

    };
    if (!accept.checked) {
        errors.push(accept.previousElementSibling);
        console.log('checkbox error !')

    };

    resetLabels();

    if (errors.length > 0) {

        errors.forEach(function (err) {

            err.style.color = 'red';
        });
    };
    console.log('done')

    function resetLabels() {
        labelList.forEach(function (err) {
            err.style.color = '';
        });
    }
};