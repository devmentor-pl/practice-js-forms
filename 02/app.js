const formEl = document.querySelector('form')
const labelList = document.querySelectorAll('label')

 function errorCheck(e) {
    e.preventDefault()
    removeRed()
    const email = formEl.elements.login
    const password = formEl.elements.pass1
    const passwordTwo = formEl.elements.pass2
    const formAccepted = formEl.elements.accept
    const errors = []

    if(!email.value.includes('@')) {
        errors.push(email)
        console.log('Brakuje znaku @')
    } 
    if(password.value.length < 6) {
        errors.push(password)
        console.log('Hasło musi mieć minimum 6 znaków')
    }
    if(passwordTwo.value !== password.value) {
        errors.push(passwordTwo)
        console.log('Hasła nie są takie same')
    }

    if(!formAccepted.checked) {
        errors.push(formAccepted)
        console.log('Należy zaakceptować regulamin')
    } 

    if(errors.length === 0) {
        console.log('done')
    } else {
        errors.forEach(function(error) {
            error.previousElementSibling.style.color = 'red'
        })  
    }
}

function removeRed() {
    labelList.forEach(function(e){      
        e.style.color = ''
    })
}

formEl.addEventListener('submit', errorCheck )
formEl.noValidate = true
