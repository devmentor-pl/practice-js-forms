const formEl = document.querySelector('form');
formEl.noValidate = true;

formEl.addEventListener('submit', fillInTheForm);

function fillInTheForm(e) {

    e.preventDefault();

    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const confirm = e.target.elements.accept.value;

    const errors = [];

    if(!email.includes('@')) {
        console.log('please enter a valid email address')

        errors.push(e.target.elements.login)
    } else {
        console.log('email address is correct')
    }

    if(pass1 === pass2 && pass1.length > 6 && pass2.length > 6) {
        console.log('your password is correct')
    } else {
        alert('password requires a maximum of 6 characters')
        alert('passwords do not match')
        errors.push(e.target.elements.pass1)
        errors.push(e.target.elements.pass2)
    }

    if(!confirm.checked) {
        alert('please confirm the regulations')
        errors.push(e.target.elements.accept)
    }

    errors.forEach(function(err) {
        err.nextElementSibling.style.color = 'red';
    })
}