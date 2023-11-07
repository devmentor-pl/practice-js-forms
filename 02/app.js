const form = document.querySelector('form');
form.noValidate = true;
let errors = [];
// console.log(form.elements.accept.checked)

form.addEventListener('submit', function(e){
    const eMail = e.target.elements.login.value;
    const firstPassword = e.target.elements.pass1.value;
    const secondPassword = e.target.elements.pass2.value;
    const checkbox = e.target.elements.accept;
    // console.log(typof (firstPassword));

    e.preventDefault();

    if (!eMail.includes('@')) {
        // errors.push("Sign '@' is required");
        errors.push(e.target.elements.login);
    }
    else if (eMail.length === 0) {
        // errors.push("Email is required");
        errors.push(e.target.elements.login);
    }
    else {
        e.target.elements.login.parentElement.style.color = 'black';
    }
    if (firstPassword !== secondPassword) {
        // errors.push("Password must be the same");
        errors.push(e.target.elements.pass2);
    }
    else {
        e.target.elements.pass2.parentElement.style.color = 'black';
    }
    if (firstPassword.length < 6){
        // errors.push("Password can't be shorter than 6 signs");
        errors.push(e.target.elements.pass1);
    }
    else {
        e.target.elements.pass1.parentElement.style.color = 'black';
    }
    if (checkbox.checked !== true) {
        // errors.push("You must accept regulations");
        errors.push(checkbox);
    }
    else {
        checkbox.parentElement.style.color = 'black';
    }
    if (errors.length > 0) {

        e.preventDefault();
        errors.forEach(function(el){

            console.log(el);
            el.parentElement.style.color = 'red';

        });
        errors = [];
    }
    else {
        console.log('done');
        errors = [];
    }
});