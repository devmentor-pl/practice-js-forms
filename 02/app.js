
// solution One first error - set label red
// -----------------------------------
// const form = document.querySelector('form')
// form.noValidate = true
// form.autocomplete = 'off'
// console.log(form.noValidate)
// console.log(form.autocomplete)

// const handleSubmit = function(e) {
//     e.preventDefault()
//     console.log('submit')

//     const label = document.querySelectorAll('label')
//     label.forEach(lab => {
//         lab.removeAttribute('style')
//     })

//     // email
//     const email = form.login
//     console.log('email:', email.value)

//     if(!email.value.includes('@')) {
//         console.log('email - brak @')
//         const errorEmail = email.previousElementSibling
//         errorEmail.style.color = 'red'
//         return
//     } 

//     // password
//     const pass1 = form.pass1
//     const pass2 = form.pass2

//     if(pass1.value.length < 6) {
//         console.log('password 1 must have over 6 chars')
//         const errorPass1 = pass1.previousElementSibling
//         errorPass1.style.color = 'red'
//         return
//     }
//     if(pass2.value.length < 6) {
//         console.log('password 2 must have over 6 chars')
//         const errorPass2 = pass2.previousElementSibling
//         errorPass2.style.color = 'red'
//         return
//     }
//     if(pass1.value !== pass2.value) {
//         console.log('passwords are different')
//         const errorPass1 = pass1.previousElementSibling
//         const errorPass2 = pass2.previousElementSibling
//         errorPass1.style.color = 'red'
//         errorPass2.style.color = 'red'
//         return
//     }

//     // regulation checkbox
//     const reg = form.accept 
//     if(reg.checked) {
//         console.log('Regulation checked :)')
//     } else {
//         console.log('Regulation not checked')
//         const errorReg = reg.previousElementSibling
//         errorReg.style.color = 'red'
//         return
//     }

//     // send data
//     console.log('Data send ... DONE')
// }
// form.addEventListener('submit', handleSubmit)


// solution Two errors in Array
// -----------------------------------
const form = document.querySelector('form')
form.noValidate = true
form.autocomplete = 'off'

const handleSubmit = function(e) {
    e.preventDefault()
    const errors = []

    const label = document.querySelectorAll('label')
    label.forEach(lab => {
        lab.removeAttribute('style')
    })

    // email
    const email = form.login
    console.log('email:', email.value)

    if(!email.value.includes('@')) {
        console.log('email - brak @')
        errors.push(email)
    } 

    // password
    const pass1 = form.pass1
    const pass2 = form.pass2

    if(pass1.value.length < 6) {
        console.log('password 1 must have over 6 chars')
        errors.push(pass1)
    }
    if(pass2.value.length < 6) {
        console.log('password 2 must have over 6 chars')
        errors.push(pass2)
    }
    if(pass1.value.length >= 6 && pass2.value.length >= 6) {
        if(pass1.value !== pass2.value) {
            console.log('passwords are different')
            errors.push(pass1)
            errors.push(pass2)
        }
    }

    // regulation checkbox
    const reg = form.accept 
    if(reg.checked) {
        console.log('Regulation checked :)')
    } else {
        console.log('Regulation not checked')
        errors.push(reg)
    }

    errors.forEach(item => {
        const elementError = item.previousElementSibling
        elementError.style.color = 'red'
    })
    // send data
    if(errors.length === 0) {
        console.log('Data send ... DONE')
    } else {
        console.log('Form not completed. so NOT sent')
    }
}

form.addEventListener('submit', handleSubmit)















