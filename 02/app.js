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
    const pass1Self = e.target;
    const pass2Self = e.target;
    const pass1Val = pass1Self.value;
    const pass2Val = pass2Self.value;


    if (pass1Val.length >= 6 && pass2Val.length >= 6) {
        if (!(pass1Val === pass2Val)) {
            console.log('Wprowadzone hasła różnią się');
        } else {
            console.log('Hasła wprowadzone poprawnie');
        }
    } else {
        console.log('Hasło musi mieć min. 6 znaków');
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