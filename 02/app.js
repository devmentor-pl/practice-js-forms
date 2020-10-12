const formEl = document.querySelector('form');

formEl.setAttribute('novalidate', true);
formEl.addEventListener('submit', submitHandler);

function submitHandler(e) {
    const errorList = [];
    const loginEl = formEl.elements['login'];
    const pass1El = formEl.elements['pass1'];
    const pass2El = formEl.elements['pass2'];
    const acceptEl = formEl.elements['accept'];

    if(!loginEl.value.includes('@')) {
        errorList.push(loginEl);
    }
    if(pass1El.value !== pass2El.value) {
        errorList.push(pass1El);
        errorList.push(pass2El);
    }
    if(!acceptEl.checked) {
        errorList.push(acceptEl);
    }
    errorList.forEach(function(error) {
        error.previousElementSibling.style.color = 'red';
    })

    if(errorList.length > 0) {
        e.preventDefault();
    }
}