const formEl = document.querySelector("form")
const inputEmailEl = document.querySelector("#formLogin")
const labelOfEmail = inputEmailEl.previousElementSibling

formEl.addEventListener("submit", checkData)


function checkData(e) {
    e.preventDefault()
    const email = e.target.elements.login.value
    const password1 = e.target.elements.pass1.value
    const password2 = e.target.elements.pass2.value

    const errors = []

    if(email.includes('@')) {
        console.log('Done');
    } else {
        errors.push('Email needs @ sign')
        const labelOfEmail = e.target.elements.login.previousElementSibling
        labelOfEmail.style.color = 'red'
    }
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
