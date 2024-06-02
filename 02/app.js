const formEl = document.querySelector("form")
formEl.addEventListener("submit", checkData)
const errorsList = document.createElement('ul')
errorsList.classList.add('errors')


function checkData(e) {
    e.preventDefault()
    const email = e.target.elements.login.value
    const password1 = e.target.elements.pass1.value
    const password2 = e.target.elements.pass2.value
    const accept = e.target.elements['accept']
    const errors = []

    if(email.includes('@')) {
        console.log('Done');
    } else {
        errors.push('Email needs @ sign')
        const labelOfEmail = e.target.elements.login.previousElementSibling
        labelOfEmail.style.color = 'red'
    }

    if (password1 !== password2) {
        errors.push('Passwords need to be the same')
        const labelOfPass1 = e.target.elements.pass1.previousElementSibling
        const labelOfPass2 = e.target.elements.pass2.previousElementSibling
        labelOfPass1.style.color = 'red'
        labelOfPass2.style.color = 'red'
        e.target.elements.pass1.style.border = '1px solid red'
    }
    
    if (password1.length < 6) {
        errors.push('Password need to have min. 6 characters')
        const labelOfPass1 = e.target.elements.pass1.previousElementSibling
        const labelOfPass2 = e.target.elements.pass2.previousElementSibling
        labelOfPass1.style.color = 'red'
        labelOfPass2.style.color = 'red'
        e.target.elements.pass2.style.border = '1px solid red'
        
    }
    
    if(!accept.checked) {
        errors.push('To register you need to accept the regulations')
        const labelOfCheckbox = e.target.elements.accept.previousElementSibling
        labelOfCheckbox.style.color = 'red'
    }

    if (errors.length > 0) {
        errorsList.innerHTML = '';

        errors.forEach(function (element) {
            
            const newLi = document.createElement('li')
            newLi.innerText = element
            errorsList.appendChild(newLi)
            
            
        })
    }

    formEl.appendChild(errorsList)

}




















// inputEmailEl.addEventListener("input", checkEmail)

// function checkEmail(e) {
// 	e.preventDefault()
// 	const self = e.target
// 	const email = self.value
//     if(email.includes('@')) {
//         console.log('Done');
//         labelOfEmail.style.color = ''
//     } else {
//         labelOfEmail.style.color = 'red'
//     }
// }
