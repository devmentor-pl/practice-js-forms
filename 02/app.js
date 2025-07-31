//sprawdzenie loginu
const spanMail = document.querySelector('.mail-error');
const input = document.querySelector('input[name=login]');

input.addEventListener('input', checkMail);

function checkMail(e) {
    const self = e.currentTarget;
    const eMail = self.value;

    if (!eMail.includes('@')) {
        spanMail.innerText = 'Wprowadź poprawny adres e-mail.';
        spanMail.style.color = 'red';
    } else {
        spanMail.innerText = 'Pole wypełnione poprawnie.';
        spanMail.style.color = 'green';
    }
}
//sprawdzanie haseł
const inputPass1 = document.querySelector('input[name=pass1]');
const inputPass2 = document.querySelector('input[name=pass2]');
const labelPass1 = document.querySelector('label[for=formPass1]');
const labelPass2 = document.querySelector('label[for=formPass2]');
const form = document.querySelector('form');

form.addEventListener('submit', checkPass);

function checkPass(e) {
    e.preventDefault();
    const pass1 = e.target.elements['pass1'];
    const pass2 = e.target.elements['pass2'];
    // const pass1Val = pass1Self.value;
    // const pass2Val = pass2Self.value;


    if (pass1.length >= 6 && pass2.length >= 6) {
        if (!(pass1 === pass2)) {
            pass2error.innerText = 'Wprowadzone hasła różnią się';

        } else {
            pass2error.innerText = 'Hasła wprowadzone poprawnie';
        }
    } else {
        const pass1error = document.querySelectorAll('.pass1-error');
        const pass2error = document.querySelectorAll('.pass2-error');

        pass1error.innerText = 'Hasło musi mieć min. 6 znaków';
        pass2error.innerText = 'Hasło musi mieć min. 6 znaków';

    }
}

//sprawdzanie checked
form.addEventListener('submit', acceptForm);

function acceptForm(e) {
    const accept = e.target.elements['accept'];

    if(!accept.checked) {
        console.log('Musisz zaakceptować warunki regulaminu');
    }
}