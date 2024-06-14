const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = formEl.elements['login'].value
    const pass1Value = formEl.elements['pass1'].value;
    const pass2Value = formEl.elements['pass2'].value;
    const checkboxValue = formEl.elements['accept'].checked;
    const errors = [];

    document.querySelectorAll('label').forEach(function (label) {
        label.style.color = ''
    });

    if (!emailValue.includes('@')) {
        errors.push('formLogin')
    }

    if (pass1Value.length < 6) {
        errors.push('formPass1')
    } 
    if (pass2Value.length < 6) {
        errors.push('formPass2')
    }

    if (pass1Value !== pass2Value) {
        errors.push('formPass1')
        errors.push('formPass2')
    }
    if (!checkboxValue) {
        errors.push('formAccept')
    }

    if (errors.length > 0) {
        errors.forEach(function (error) {
            const label = document.querySelector(`label[for=${error}]`)
            if (label) {
                label.style.color = 'red'
            }
        })
    } else {
        console.log('done')
    }
});