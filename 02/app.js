const form = document.querySelector('form')
form.addEventListener('submit', validateInput)
    
function validateInput(e) {
    e.preventDefault()
    const email = document.querySelector('input[type="email"]')
    const password1 = document.querySelector('input[name="pass1"]')
    const password2 = document.querySelector('input[name="pass2"')
    const checkbox = document.querySelector('#formAccept')

    let errors = []

    if(!(checkbox.checked)) {
        const wrongInputs = (checkbox)
        errors.push(wrongInputs) 
    }
    
    if(!(email.value.includes('@'))) {
        const WrongInputs = email
        errors.push(WrongInputs)
    }
    if(password1.value !== password2.value || password1.value.length <= 6) { 
        const WrongInputs = ([password1, password2])
        errors.push(WrongInputs)
    }
    errors = errors.flat()

    errors.forEach((wrongInput) => {
        wrongInput.previousElementSibling.style.color = 'red'
    })

    if(errors.length === 0) {
        console.log('done')
        for(const element of form) {
            element.previousElementSibling.style.color = 'black'
        }
    }
}