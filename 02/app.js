
const form = document.querySelector('form')
form.noValidate = true
form.autocomplete = 'off'
console.log(form.noValidate)
console.log(form.autocomplete)

const handleSubmit = function(e) {
    e.preventDefault()
    console.log('submit')

    // email
    const email = form.login
    console.log('email:', email.value)

    if(!email.value.includes('@')) {
        console.log('email - brak @')
        return
    } 

    // password
    const pass1 = form.pass1
    const pass2 = form.pass2

    if(pass1.value.length < 6) {
        console.log('password 1 must have over 6 chars')
        return
    }
    if(pass2.value.length < 6) {
        console.log('password 2 must have over 6 chars')
        return
    }
    if(pass1.value !== pass2.value) {
        console.log('passwords are different')
        return
    }

    // regulation checkbox
    const reg = form.accept 
    if(reg.checked) {
        console.log('Regulation checked :)')
    } else {
        console.log('Regulation not checked')
        return
    }

    // send data
    console.log('Data send ... DONE')
}

form.addEventListener('submit', handleSubmit)















