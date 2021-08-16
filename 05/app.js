const form = document.querySelector('form');
const messages = document.querySelector('.messages');
let errors = [];

if (form) {
    form.addEventListener('submit', checkInputs);
};

function checkInputs(e) {
    errors = [];
    const inputs = form.querySelectorAll('input[name]');
    const select = form.querySelector('select');
    inputs.forEach(input => {
        input.style = '';
        if (input.value === '' && input.name !== 'flatNumber') {
            e.preventDefault();
            console.log(input.parentNode.textContent);
            errors.push(` ${input.parentNode.textContent.trim()}`);
            input.style.boxShadow = '0 0 0 1px red';
        };
    });
    select.style = '';
    if (select.value === '') {
        errors.push(` ${select.parentNode.firstChild.textContent.trim()}`);
        select.style.boxShadow = '0 0 0 1px red';
    }
    messages.textContent = `Pola ${errors} są wymagane!`;
}