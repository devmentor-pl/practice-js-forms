document.addEventListener('DOMContentLoaded', init)

function init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
    const errors = [];

    function showErrors(errors) {
        errors.forEach(function (element) {
            const label = element.previousElementSibling
            label.style.color = 'red';
        })
    }

    function resetErrors(errors) {
        errors.forEach(function (element) {
            const label = element.previousElementSibling
            label.style.color = 'black';  
        })
        errors.length = 0;
    }
    
    function validateForm(e) {
        e.preventDefault();
        
        resetErrors(errors);

        const login = form.elements.login;
        const pass1 = form.elements.pass1;
        const pass2 = form.elements.pass2;
        const accept = form.elements.accept;

        if (!login.value.includes('@')) {
            errors.push(login);
        } 
        if (pass1.value !== pass2.value) {
            errors.push(pass2)
        } 

        if (pass1.value.length < 6) {
            errors.push(pass1);
            errors.push(pass2);
        } 
        if (!accept.checked) {
            errors.push(accept)
        } 

        if (errors.length > 0) {
            showErrors(errors);
        } else {
            console.log('done')
        }
    }


}

