const form = document.querySelector('form');

form.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDeafult();

    const errors = [];
    const email = e.target.elements.email.value;
    if(!email.includes('@')) {
        errors.push('email');
    }
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;

    if(pass1 !== pass2) {
        errors.push('password')
    }

    console.log(errors)
}