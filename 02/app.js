const formEl = document.forms[0];
const errorsList = document.createElement('ul');
document.body.appendChild(errorsList);

formEl.addEventListener('submit', checkFieldsData)

function checkFieldsData(e) {
    e.preventDefault();

    const errorsAddr =[];
    const errors =[]
   
    const email = formEl["formLogin"];
    const pass1 = formEl["formPass1"];
    const pass2 = formEl["formPass2"];
    const formAccept = formEl["formAccept"];
    const requirements = {
        mail: {
            condition: !email.value.includes('@'),
            errorText: 'Incorrect mail format!',
        },
        formAccept: {
            condition: !formAccept.checked,
            errorText: "You have to accept policy in order to join our community!",
        },
        password: {
            condition: [
                ((pass1.value!==pass2.value)|| (!pass1.value || !pass2.value)),
                pass1.value.length <= 6],
            errorText: [
                "Passwords either don't match or field/fields are empty!",
                "Password must be at least 7 characters long!"
            ]
        },
    }
        

    checkAndPushErrors(email, requirements.mail.condition , requirements.mail.errorText);
    checkAndPushErrors(formAccept, requirements.formAccept.condition , requirements.formAccept.errorText);

    //sprawdzenie najpierw czy hasło w ogóle nie jest puste i czy się pola się zgadzają, a później czy jest dłuższe niż 6 znaków 
    if(requirements.password.condition[0]) {
        checkAndPushErrors([pass1,pass2], requirements.password.condition[0], requirements.password.errorText[0]);
    } else {
        checkAndPushErrors([pass1,pass2], requirements.password.condition[1], requirements.password.errorText[1]);
    }
   

    handleErrorsLists();


    function checkAndPushErrors(inputField, inputRequirement, error) {
        if(inputRequirement) {
            errors.push(error);   
            //dla dwuelementowego parametru (password)         
            if(inputField.length > 0) {
                inputField.forEach(function(item){
                    errorsAddr.push(item);
                })
            } else {
            //dla jednoelementowego parametru
                errorsAddr.push(inputField);
            }    
            
        }
    }

    function handleErrorsLists () {
        if (errors.length > 0) {
            createTextList();
            markLabels();
        } else {
            console.log('done');
        } 
    }


    function createTextList() {
            errorsList.innerHTML="" 
            errors.forEach(function(error){
                const newLi = document.createElement('li');
                newLi.innerText = error
                errorsList.appendChild(newLi);
            })
    }

    function markLabels() {
        errorsAddr.forEach(function(address){
            address.previousElementSibling.style.color = 'red';
        })
    }
    
}  








