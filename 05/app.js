formEl = document.querySelector('form');
ulEl = document.querySelector('.messages');
formEl.addEventListener('submit', checkForm);


function checkPersonData(dataPerson){ 
    const regExp = /^[a-zA-Z]{2,30}/;
    if(dataPerson.match(regExp)){
        return dataPerson;
    }
    return false;
}

function checkStreet(dataStreet){
    const regExp = /[a-zA-Z]{2,}/;
    if(dataStreet.match(regExp)){
        return dataStreet;
    }
    return false;
}

function checkHouseNumber(dataHouseNo){
    const regExp = /^[0-9]/;
    if(dataHouseNo.match(regExp)){
        return dataHouseNo;
    }
    return false;
}

function checkCity(dataCity){
    const regExp = /^[a-zA-Z]{2,30}/;
    if(dataCity.match(regExp)){
        return dataCity;
    }
    return false;
}

function checkForm(e){
    e.preventDefault();
    let errors = [];

    const takeFirstName = e.target.elements.firstName.value;
    if(!checkPersonData(takeFirstName)){
        errors.push('Wpisz poprawne imie');
    };

    const takeLastName = e.target.elements.lastName.value;
    if(!checkPersonData(takeLastName)){
        errors.push('Wpisz poprawne nazwisko');
    };

    const takeStreet = e.target.elements.street.value;
    if(!checkStreet(takeStreet)){
        errors.push('Wpisz poprawna nazwe ulicy');
    };

    const takeHouseNo = e.target.elements.houseNumber.value;
    if(!checkHouseNumber(takeHouseNo)){
        errors.push('Wpisz poprawny numer domu');
    };

    const takeZip = e.target.elements.zip.value;
    const takePattern = e.target.elements.zip.pattern;
    if(!takeZip.match(takePattern)){
        errors.push('Wpisz poprawny kod pocztowy');
    };

    const takeCity = e.target.elements.city.value;
    if(!checkCity(takeCity)){
        errors.push('Wpisz poprawna nazwe miejscowosci');
    };

    const takeVoivodeship = e.target.elements.voivodeship.value;
    if(!takeVoivodeship){
        errors.push('Wybierz wojewodztwo');
    };

    checkAndShowErrors(errors);
}

function checkAndShowErrors(errorsArray){
    if(errorsArray.length>0){
        ulEl.innerHTML = '';
        errorsArray.forEach(function(errorName){
            const newLiEl = document.createElement('li');
            newLiEl.innerText = errorName;
            ulEl.appendChild(newLiEl);
            newLiEl.style.color = 'red';
        });
    }
    else {
        formEl.submit(alert('Wiadomość została wysłana'));
    }
}




