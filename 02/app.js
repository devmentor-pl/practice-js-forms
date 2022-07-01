const formEl = document.querySelector('form')
const labels = document.querySelectorAll('label')

formEl.addEventListener('submit', checkData)

function checkData(e) {
    e.preventDefault()

    const email = formEl.elements.login
    const pass1 = formEl.elements.pass1
    const pass2 = formEl.elements.pass2
    const accept = formEl.elements.accept

    const errors = []

    if (!email.value.includes('@')) {
        errors.push(email.previousElementSibling)
    }

    if (pass1.value !== pass2.value || pass1.value.length <= 6) {
        errors.push(pass1.previousElementSibling)
        errors.push(pass2.previousElementSibling)
    }

    if (!accept.checked) {
        errors.push(accept.previousElementSibling)
    }

    resetErrors()

    if (errors.length === 0) {
        console.log('done')
    } else {
        showErrors(errors)
    }
}

function resetErrors() {
    labels.forEach(function (err) {
        err.style.color = ''
    })
}

function showErrors(errors) {
    errors.forEach(function (err) {
        err.style.color = 'red'
    })
}