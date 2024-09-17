const formEl = document.querySelector('form');
if (formEl) {
    formEl.setAttribute('novalidate', true)
    formEl.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')

    const login = formEl.elements.login
    const pass1 = formEl.elements.pass1
    const pass2 = formEl.elements.pass2
    const accept = formEl.elements.accept
    const errors = []
    const labelsList = formEl.querySelectorAll('label')

    checkEmail(login, errors)
    checkPassword(pass1, pass2, errors)
    checkCheckbox(accept, errors)
    resetColors(labelsList)
    checkErrors(errors)
}

function checkEmail(login, errors) {
    if (!login.value.includes('@')) {
        errors.push(login.previousElementSibling)
    }
}

function checkPassword(pass1, pass2, errors) {
    if (pass1.value.length <= 6) {
        console.log('password must have min 6 charakters')
        errors.push(pass1.previousElementSibling)
        errors.push(pass2.previousElementSibling)
    }
    if (pass2.value === pass1.value) {
        console.log('passwords the same')
    } else {
        errors.push(pass2.previousElementSibling)
    }
}

function checkCheckbox(accept, errors) {
    if (accept.checked) {
        console.log('checked')
    } else {
        errors.push(accept.previousElementSibling)
    }
}

function checkErrors(errors) {
    if (errors.length !== 0) {
        errors.forEach(function (err) {
            err.style.color = 'red'
            err.nextElementSibling.value = ''
        })
    } else {
        console.log('done')
    }
}

function resetColors(list) {
    list.forEach(function (item) {
        item.style.color = 'black'
    })
}
