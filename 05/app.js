const formEl = document.querySelector('form');

formEl.addEventListener('submit', submitHandler);
formEl.noValidate = true;

function submitHandler(e) {
    const errorList = [];

    clearPrevErr();

    if(isNewErrDetected()) {
        e.preventDefault();
        displayNewErr();
    } else {
        window.alert('Dane zostały wysłane prawidłowo');
    }

    /////////////////functions:
    function clearPrevErr() {
        const prevErrElements = formEl.querySelectorAll('.error-messages');

        if(prevErrElements) {
            prevErrElements.forEach(function(prevErr) {
                formEl.removeChild(prevErr);
            })
        }
    }

    function displayNewErr() {
        errorList.forEach(function(err) {
            const liElement = document.createElement('li');
            
            liElement.style.color = 'red';
            liElement.classList.add('error-messages');
            liElement.innerText = err;
            formEl.appendChild(liElement);
        })
    }

    function isNewErrDetected() {
        //check if firstName is provided
        if(e.target.elements.firstName.value === '') {
            errorList.push('Wprowadź imię');
        }
        //check if lastName is provided
        if(e.target.elements.lastName.value === '') {
            errorList.push('Wprowadź nazwisko');
        }    
        //check if street is provided
        if(e.target.elements.street.value === '') {
            errorList.push('Wprowadź nazwę ulicy');
        }  
        //check if houseNumber is provided
        if(e.target.elements.houseNumber.value === '') {
            errorList.push('Wprowadź poprawny numer budynku');
        }
        //check if zip is provided and correct
        if(!(/^\d{2}-\d{3}$/.test(e.target.elements.zip.value))) {
            errorList.push('Wprowadź kod pocztowy w formacie "xx-xxx", gdzie "x" jest cyfrą');
        }
        //check if city is provided
        if(e.target.elements.city.value === '') {
            errorList.push('Wprowadź miejscowość');
        }      
        //check if voivodeship is provided
        if(e.target.elements.voivodeship.value === '') {
            errorList.push('Wprowadź nazwę województwa');
        } 
        if(errorList.length > 0) {
            return true;
        }
        return false;
    }
}