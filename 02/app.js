const formEl = document.querySelector('form');
formEl.noValidate = true;

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailEl = formEl.elements.login;
    const formPass1 = formEl.elements.pass1;
    const formPass2 = formEl.elements.pass2;
    const formAccept = formEl.elements.accept;

    const errors = [];

    if(!emailEl.value.includes('@')) {
        errors.push('[for="formLogin"]');
    }

    if((formPass1.value.length <= 6) || (formPass1.value !== formPass2.value)) {
        errors.push('[for="formPass1"]', '[for="formPass2"]');
    }

    if(!formAccept.checked) {
        errors.push('[for="formAccept"]')
    }
    errors.forEach(err => console.log(err));

    const labelsList = document.querySelectorAll('label');
    labelsList.forEach(function(label) {
        label.style.color = '';
    });

    if(errors.length === 0) {
        console.log('done');
    } else {
        errors.forEach(function(selector) {
            const el = document.querySelector(selector);
            el.style.color = 'red';
        });
    };

});