const formEl = document.querySelector('form')
const emailInputEl = document.getElementById("formLogin");
const passwordInputEl = document.getElementById("formPass1");
const secondPasswordInputEl = document.getElementById("formPass2");
const checkBoxEl = document.getElementById("formAccept");

const errors = [];

//walidacja mail:

const emailValidation = () => {
 const emailValue = emailInputEl.value
 
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if(!emailRegex.test(emailValue)){
    errors.push('#formLogin')
 }
}

//walidacja hasła:
const firstPasswordValidation = () =>{
    const passwordValue = passwordInputEl.value;
    if(passwordValue.length <= 6){
        errors.push("#formPass1")
    }
}

const secondPasswordValidation = () =>{
    const passwordValue = passwordInputEl.value;
    const secondPasswordValue = secondPasswordInputEl.value
    if(passwordValue !== secondPasswordValue){
        errors.push("#formPass2");
    }
}

const regulationsValidation = () => {
 if(!checkBoxEl.checked){
    errors.push("#formAccept");
 }
}

const handleError = () => {
	// Zresetuj style przed sprawdzaniem błędów
	document.querySelectorAll("form label").forEach((label) => {
		label.style.color = ""; // Zresetuj kolor
	});

	// Oznacz błędne etykiety na czerwono
	errors.forEach((selector) => {
		const label = document.querySelector(`${selector} + label`);
		if (label) {
			label.style.color = "red";
		}
	});

	// Obsłuż błędy
	if (errors.length > 0) {
		console.log(
			"Walidacja nie powiodła się. Proszę sprawdzić formularz pod kątem błędów."
		);
	} else {
		console.log("Done.");
	}
};

// nie wiem dlaczego nie zaznacza mi się błąd dla odpowiedniego <label> na czerwono? Tą funkcję robię przy pomocy chata gpt, ale nie rozumiem o co mu chodzi.



formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    emailValidation()
    firstPasswordValidation()
    secondPasswordValidation()
    handleError()

})