const form = document.querySelector('form');
const mail = form.querySelector('#formLogin');
const pass1 = form.querySelector('#formPass1');
const pass2 = form.querySelector('#formPass2');
const checkbox = form.querySelector('#formAccept');

if (form) {
    form.addEventListener('submit', (e) => {
        const errors = [];

        if (!mail.value.includes('@')) {
            errors.push(mail);
            mail.value = 'Wrong email address! No @ sign';
        } else {
            mail.style = '';
        }

        if (pass1.value.length < 6) {
            alert('Hasło musi zawierać co najmniej 6 znaków!');
            e.preventDefault();

        } else {
            if (pass1.value !== pass2.value) {
                errors.push(pass1);
                errors.push(pass2);
                console.log('Podane hasła są różne!');
            } else {
                pass1.style = '';
                pass2.style = '';
            }
        }

        if (!checkbox.checked) {
            errors.push(checkbox);
            console.log('Nie zaznaczono regulaminu!');
        } else {
            checkbox.style = ''
        }

        errors.forEach(error => {
            error.style.boxShadow = '0 0 0 1px red';
            error.style.color = 'grey';
        });

        if (errors.length > 0) e.preventDefault();
    })
}