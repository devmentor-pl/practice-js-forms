const formEl = document.querySelector("form");
formEl.addEventListener("submit" ,checkData);
const allLabels = document.querySelectorAll("label");
console.log(allLabels)

const errors = [];

function checkData(e){
    errors.length = 0;
    allLabels.forEach(label => label.style = "color:green")
    e.preventDefault();
    const self = e.target.elements;
    const email = self.login;
    const pass1 = self.pass1;
    const pass2 = self.pass2;
    const accept = self.accept;
    
    

    function getLabel(input){
        return input.previousElementSibling;
    }
    function validateEmail(email){
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const isValidateEmail = validateEmail(email.value);

    if(!isValidateEmail){
        errors.push(getLabel(email));
        console.log("błędny email")
    } 

    if(pass1.value !== pass2.value){
        errors.push(getLabel(pass1))
        errors.push(getLabel(pass2))
        console.log("hasła nie są takie same");
    } else if( pass1.value.length <=6){
        errors.push(getLabel(pass1))
        errors.push(getLabel(pass2))
        console.log("hasło jest krótsze niż 6 znaków");
    } 

    if(!accept.checked){
        errors.push(getLabel(accept))
        console.log("musisz zaakceptować regulamin")
    }


    errors.forEach(error => error.style = "color:red")
    if(!errors.length){
        console.log("done")
    }
    
}