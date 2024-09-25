const form = document.querySelector('form')
const formEl = form.elements
let pass1
form.noValidate = true

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let errors = false
    let isError
    for (const input of formEl) {
        if (input.type !== 'submit') isError = validate(input)
        if (!isError) errors = true
    }
    if (!errors) console.log('done')
})

function isEmailCorrect(email) {
    const loginReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return loginReg.test(email)
}
function isPassCorrect(pass) {
    return pass.length > 6
}
function isPassSame(pass1, pass2) {
    return pass1 === pass2
}
function isChecked(input) {
    return input.checked
}
function colorRed(input) {
    const label = input.previousElementSibling
    label.style.color = '#ff0000'
}
function clearRed(input) {
    const label = input.previousElementSibling
    label.style.color = '#000'
}
function validate(input) {
    const name = input.name
    const value = input.value
    let isValid
    switch(name) {
        case 'login':
            isValid = isEmailCorrect(value)
            break
        case 'pass1':
            pass1 = value
            isValid = isPassCorrect(pass1)
            break
        case 'pass2':
            isValid = isPassSame(pass1, value)      
            break 
        case 'accept':
            isValid = isChecked(input)
    }
    isValid ? clearRed(input) : colorRed(input)
    return isValid
}