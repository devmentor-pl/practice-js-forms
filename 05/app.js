const formEl = document.querySelector('form');

formEl.addEventListener('submit', submitHandler);
formEl.noValidate = true;

function submitHandler(e) {

    const errorList = [];
    const prevErrorElements = formEl.querySelectorAll('.error-messages');
    //clear previouse errors
    if(prevErrorElements) {
        prevErrorElements.forEach(function(prevError) {
            formEl.removeChild(prevError);
        })
    }
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
    if(!isZipCorrect()) {
        errorList.push('Wprowadź kod pocztowy w formacie "xx-xxx", gdzie "x" jest cyfrą');
    } 

    function isZipCorrect() {
        const zip = e.target.elements.zip.value;
        let zipErrorsNumber = 0;
        firstPart = zip.substring(0, 2);
        secondPart = zip.substring(3);

        if(zip.length !== 6) {
            zipErrorsNumber++;
        }
        if(zip[2] !== '-') {
            zipErrorsNumber++;
        }
        if(!Number(firstPart) || !Number(secondPart)) {
            zipErrorsNumber++;
        }

        if(zipErrorsNumber > 0) {
            return false;
        }

        return true;
    }
    //check if city is provided
    if(e.target.elements.city.value === '') {
        errorList.push('Wprowadź miejscowość');
    }      
    //check if voivodeship is provided
    if(e.target.elements.voivodeship.value === '') {
        errorList.push('Wprowadź nazwę województwa');
    } 

    //if there are any errors
    if(errorList.length > 0) {
        e.preventDefault();
    
        errorList.forEach(function(error) {
            const liElement = document.createElement('li');
            
            liElement.style.color = 'red';
            liElement.classList.add('error-messages');
            liElement.innerText = error;
            formEl.appendChild(liElement);
        })
    } else {
        window.alert('Dane zostały wysłane prawidłowo')
    }
}