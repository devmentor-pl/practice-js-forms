document.addEventListener('DOMContentLoaded', init)


function init() {

    // console.log('DOM')

    const formEl = document.querySelector('form')
    const labelList = document.querySelectorAll('label')

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)

    }


    function handleSubmit(e) {
        e.preventDefault()
        console.log('submit')

        const loginEl = formEl.elements.login
        const pass1El = formEl.elements.pass1
        const pass2El = formEl.elements.pass2
        const acceptEl = formEl.elements.accept

        const errors = []

        console.log(loginEl, pass1El, pass2El, acceptEl)

        if (!isCorrectLogin(loginEl.value)) {
            errors.push(loginEl.previousElementSibling)
        }

        if (pass1El.value !== pass2El.value || pass1El.value.length <= 6) {
            errors.push(pass1El.previousElementSibling)
            errors.push(pass2El.previousElementSibling)
        }
        if (!acceptEl.checked) {
            errors.push(acceptEl.previousElementSibling)
        }

        
        resetErrors()
        if (errors.length === 0) {
            console.log('done')
        } else {
            showErrors(errors)
        }
        
    }
    function resetErrors() {
        labelList.forEach(function (labelEl) {
            labelEl.style.color = ''
        })
    }
    
    function showErrors(errors) {
        errors.forEach(function (labelEl) {
            labelEl.style.color = 'red'
        })
    }

    function isCorrectLogin(login) {
        return login.indexOf('@') >= 0
    }
}
