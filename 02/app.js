const form = document.querySelector('form')

if (form) {
    form.addEventListener('submit', handleSubmit)

    function checkInput(condition, element) {
        if (condition) {
            return true
        } else {
            element.previousElementSibling.style.color = "red"

            return false
        }
    }

    const resetFontColor = function (e) {
        const formElements = e.target.elements
        const formElementsArr = [...formElements]
        formElementsArr.forEach(function (element) {
            if (element.previousElementSibling) {
                element.previousElementSibling.style.color = 'black'
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        resetFontColor(e)

        const email = e.target.elements["login"]
        const password1 = e.target.elements["pass1"]
        const password2 = e.target.elements["pass2"]
        const checkbox = e.target.elements["accept"]

        const emailCondition = email.value.includes('@')
        const password1LengthCondition = password1.value.length > 6
        const passwordIdentityCondition = password1.value === password2.value && password2.value !== ''
        const checkboxCondition = checkbox.checked

        const isEmailValidate = checkInput(emailCondition, email)
        const isPassword1LengthValidate = checkInput(password1LengthCondition, password1)
        const isPasswordValidate = checkInput(passwordIdentityCondition, password2)
        const isCheckboxValidate = checkInput(checkboxCondition, checkbox)

        if (isEmailValidate && isPasswordValidate && isPassword1LengthValidate && isCheckboxValidate) {
            console.log("done")
        }
    }
}