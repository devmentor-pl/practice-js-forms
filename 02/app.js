const registerForm = document.querySelector('form');
const errors = [];

registerForm.addEventListener('submit', function(e) {

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
    }
    if(pass1.value.length <= 6) {
        errors.push(pass1Label);
    }
    if(pass1.value !== pass2.value || pass2.value === '') {
        errors.push(pass2Label);
    }
    if(!accept.checked) {
        errors.push(acceptLabel);
    }

    if(errors.length > 0) {
        e.preventDefault();
        errors.forEach(function(element) {
            element.style.color = 'red';
        })
    } else {
        console.log('done');
    }

});
