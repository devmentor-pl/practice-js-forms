const form = document.querySelector('form')

form.addEventListener('submit', checkData)

function checkData(e) {
    const mail = form.elements.login
    const checkBox = form.elements.accept
    const pass1 = form.elements.pass1
    const pass2 = form.elements.pass2
    e.preventDefault()
    const errors = []
    if (!mail.value.includes('@')) {
        errors.push(mail.previousElementSibling)
    }
    if (pass1.value.length < 6) {
        errors.push(pass1.previousElementSibling)
        errors.push(pass2.previousElementSibling)
    }
    if (pass1.value !== pass2.value) {
        errors.push(pass1.previousElementSibling)
        errors.push(pass2.previousElementSibling)
    }
    if (checkBox.checked === false) {
        errors.push(checkBox.previousElementSibling)
    }
    if (errors.length !== 0) {
        errors.forEach(function (el) {
            el.style.color = "red"
        })
    }
    if (errors.length === 0) {
        console.log('Done')
    }
}