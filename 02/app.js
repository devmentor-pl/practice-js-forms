const formEl = document.querySelector('form');

formEl.setAttribute('novalidate', true);
formEl.addEventListener('submit', submitHandler);

function submitHandler(e) {
    const loginEl = formEl.elements['login'];
    const pass1El = formEl.elements['pass1'];
    const pass2El = formEl.elements['pass2'];
    const acceptEl = formEl.elements['accept'];

    clearPrevErr();

    if(markNewErr()) {
        e.preventDefault();
    }
        else {
            window.alert('Data sucesfully submitted');
        }

    /////////////////functions:
    function clearPrevErr() {
        const errElements = formEl.querySelectorAll('.error-mark');

        errElements.forEach(function(errEl) {
            errEl.classList.remove('error-mark');
        })
    }

    function markNewErr() {
        let isErrDetected = false;

        if(!loginEl.value.includes('@')) {
            loginEl.previousElementSibling.classList.add('error-mark');
            isErrDetected = true;
        }
        if(pass1El.value !== pass2El.value || pass1El.value === '') {
            pass1El.previousElementSibling.classList.add('error-mark');
            pass2El.previousElementSibling.classList.add('error-mark');
            isErrDetected = true;
        }
        if(!acceptEl.checked) {
            acceptEl.previousElementSibling.classList.add('error-mark');
            isErrDetected = true;
        }
        return isErrDetected;
    }
}