document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const errors = [];
        const email = form.elements['login'].value;
        const pass1 = form.elements['pass1'].value;
        const pass2 = form.elements['pass2'].value;
        const accept = form.elements['accept'].checked;

        document.querySelectorAll('label').forEach(label => label.style.color = '');

        if (!validateEmail(email)) {
            errors.push('formLogin');
        }

        if (pass1.length <= 6 || pass1 !== pass2) {
            errors.push('formPass1', 'formPass2');
        }

        if (!accept) {
            errors.push('formAccept');
        }

        if (errors.length > 0) {
            errors.forEach(function(error) {
                const label = document.querySelector(`label[for=${error}]`);
                if (label) {
                    label.style.color = 'red';
                }
            });
        } else {
            console.log('done');
        }
    });

})