const formEl = document.querySelector('form')
const labels = document.querySelectorAll('label')

formEl.noValidate = true;
formEl.addEventListener('submit', checkForm)

function checkForm(e){
    e.preventDefault()
    const login = e.target.elements.login
    const pass1 = e.target.elements.pass1
    const pass2 = e.target.elements.pass2
    const checkbox = e.target.elements.accept
    const errors = []

    checkEmail(login, errors)
    checkPass(pass1, errors)
    comparePass(pass1, pass2, errors)
    checkCheckbox(checkbox, errors)
    
    if(errors.length > 0) {
        let errorsList = ''
        for(let i = 0; i< errors.length; i++){
            errorsList += errors[i] + '\n'
        }
        alert(errorsList)
    } else {
        console.log('DONE')
    }
}

function checkEmail(email, errors){
    if(!email.value.includes('@')){
        errors.push("Your email doesn't include @ sign")
        email.previousElementSibling.style.color = 'red'
    }else{
        email.previousElementSibling.style.color = 'black'
    }
}

function checkPass(pass, errors) {
    if(pass.value.length < 6) {
        errors.push('Your password must be at least six characters long')
        pass.previousElementSibling.style.color = 'red'
    }else{
        pass.previousElementSibling.style.color = 'black'
    }
}

function comparePass(pass1, pass2, errors){
    if(pass1.value !== pass2.value){
        errors.push('Password 1 and password 2 are not the same')
        pass2.previousElementSibling.style.color = 'red'
    }else{
        pass2.previousElementSibling.style.color = 'black'
    }
}
function checkCheckbox(checkbox, errors){
    if(!checkbox.checked){
        errors.push('You must accept the regulations')
        checkbox.previousElementSibling.style.color = 'red'
    }else{
        checkbox.previousElementSibling.style.color = 'black'
    }
}