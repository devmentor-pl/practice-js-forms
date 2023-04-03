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
    };
    if (password1.value !== password2.value) {
        errors.push(password1.previousElementSibling);
    };

    if (password1.value.length <= 6) {
        errors.push(password1.previousElementSibling)
    };

    if (password2.value.length <= 6) {
        errors.push(password2.previousElementSibling)
    };

    if (!accept.checked) {
        errors.push(accept.previousElementSibling);
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