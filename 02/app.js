const form = document.querySelector('form')
const emailInForm = document.querySelector('#formLogin') 
const passwordInForm = document.querySelector('#formPass1')
const confirmPasswordInForm = document.querySelector('#formPass2')
const confirmCheckbox = document.querySelector('#formAccept')
const labelError = document.querySelectorAll('label')



form.addEventListener('submit', 

    function(e){

        e.preventDefault() // nie wysyłaj

        const email = emailInForm.value.trim() // trim() - usuwa np. spacje
        const password = passwordInForm.value
        const passwordConfirm = confirmPasswordInForm.value

        let errors = [];

        if(!email.includes('@')){ // warunek ! i nie zawiera @
            errors.push('Adres email nie zawiera "@"!')
            emailInForm.parentElement.style.color = 'red'
        } else{
            emailInForm.previousElementSibling.style.color = 'green' // jeśli jest poprawny dla przykładu 
        }

        if(password !== passwordConfirm){
            errors.push('Wprowadź takie same hasła!')
            passwordInForm.previousElementSibling.style.color = 'red'
            confirmPasswordInForm.previousElementSibling.style.color = 'red' // tutaj myślę że można to uprościć
        }
        if(password.length < 6){
            errors.push('Hasło musi zawierać więcej niż 6 znaków!')
        }

        if(!confirmCheckbox.checked) {
            errors.push('Regulamin nie został zaakceptowany!')
            confirmCheckbox.previousElementSibling.style.color = 'red'
        }

        if(errors.length > 0){
            console.log('Błędy w formularzu:')
            
          /* Zmiana koloru na czerwony dla wszystkich  
          
          labelError.forEach(
                label => label.style.color = "red"
            ) */

            errors.forEach(
                errors => console.log(errors)
            )


        } else{
            labelError.forEach(
                
                label => label.style.color = "green" // zmieniam na zieolny jeśli wypełnienie jest ok
            )

            console.log("done")
        }
    }
)