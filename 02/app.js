document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    formEl.noValidate = true;

    formEl.addEventListener('submit', handleSubmit);    
    
    function handleSubmit(e) {
        e.preventDefault();
        
        const errors = [];

        const [emailEl, passwordOneEl, passwordTwoEl, checkboxEl] = formEl.elements;
        const email = emailEl.value;
        const passwordOne = passwordOneEl.value;
        const passwordTwo = passwordTwoEl.value;
        const checkbox = checkboxEl.checked;

        if(!email.includes('@')) {
            errors.push(emailEl);
        }
        if(passwordOne.length < 6 || passwordOne !== passwordTwo) {
            errors.push(passwordOneEl);
        }
        if(checkbox === false) {
            errors.push(checkboxEl);
        }
        
        const label = formEl.querySelectorAll('label');
        label.forEach(el => {
            el.style.color = 'black';
        })

        errors.forEach(el => {
            const err = el.previousElementSibling;
            err.style.color = 'red';
        })

        if(errors.length === 0) {
            console.log('done');
        }

    }
}