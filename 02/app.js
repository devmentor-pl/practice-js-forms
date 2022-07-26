
const formEl = document.querySelector('form')
// const labelEl = document.querySelectorAll('label')
formEl.addEventListener('submit', checkData);

function checkData(e) {
    const email = e.target.elements.login;
    const password1 = e.target.elements.pass1;
    const password2 = e.target.elements.pass2;
    const regulations = e.target.elements.accept;
    const errors = [];

    email.previousElementSibling.style.color = 'black';
    password1.previousElementSibling.style.color = 'black';
    password2.previousElementSibling.style.color = 'black';
    regulations.previousElementSibling.style.color = 'black';

    // console.log(email)
    // console.log(password1)
    // console.log(password2)
    // console.log(regulations)

    if(!email.value.includes('@')) {
        errors.push(email)
    };

    if(password1.value.length <= 6) {
        errors.push(password1)
        errors.push(password2)
    }

    console.log(password1.value)

    if(password1.value !== password2.value) {
        errors.push(password2)
    };

    if(!regulations.checked) {
        errors.push(regulations)
    };

    if(errors.length > 0){
        e.preventDefault();
        errors.forEach(function(err) {
        err.previousElementSibling.style.color = 'red'
    })} else {
        console.log('done')
    }
}