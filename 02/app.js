const formEl = document.querySelector("form")
// formEl.addEventListener("submit", getFormData)
const inputEmailEl = document.querySelector("#formLogin")
const labelOfEmail = inputEmailEl.previousElementSibling

inputEmailEl.addEventListener("input", checkEmail)

function checkEmail(e) {
	e.preventDefault()
	const self = e.target
	const email = self.value
    if(email.includes('@')) {
        console.log('Done');
        labelOfEmail.style.color = ''
    } else {
        labelOfEmail.style.color = 'red'
    }
}
