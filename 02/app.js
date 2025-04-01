const registrationForm = document.querySelector('form')
const registerBtn = document.querySelector('input[type="submit"]')

registerBtn.addEventListener('click', handleRegistration)

function handleRegistration(e) {
    e.preventDefault() 

    const formLoginInput = document.querySelector('#formLogin')
    const formPass1Input = document.querySelector('#formPass1')
    const formPass2Input = document.querySelector('#formPass2')
    const formAcceptInput = document.querySelector('#formAccept')

    const emailLabel = document.querySelector('label[for="formLogin"]')
    const pass1Label = document.querySelector('label[for="formPass1"]')
    const pass2Label = document.querySelector('label[for="formPass2"]')
    const acceptLabel = document.querySelector('label[for="formAccept"]')

    const email = formLoginInput.value
    const pass1 = formPass1Input.value
    const pass2 = formPass2Input.value
    const accept = formAcceptInput.checked
    
    const errorsArr = []

    const labels = document.querySelectorAll('label')
    labels.forEach(function(label) {
        label.style.color = 'black'
    })
    
    if(!email.includes('@')) {
        errorsArr.push(emailLabel)
    }
    if(pass1.length < 6) {
        errorsArr.push(pass1Label)
    }
    if(pass1 !== pass2) {
        errorsArr.push(pass2Label, pass1Label)
    }
    if(!accept) {
        errorsArr.push(acceptLabel)
    }

    errorsArr.forEach(function(error) {
        error.style.color = 'red'
    })
    
    if(errorsArr.length === 0) {
        console.log('done');
    }
}

