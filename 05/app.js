const ulEl = document.querySelector('.messages');
const formEl = document.querySelector('form');
formEl.noValidate = true;

formEl.addEventListener('submit', checkData);

function checkData(e){
    e.preventDefault();
    
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;


    const errors = [];

    if(firstName.length === 0){
        errors.push('Field Imię is required!');
    }
    const regFirstName = /^[a-zA-ZąćężźłóńśĄĆĘŻŹŁÓŃŚ]+$/;
    if(!regFirstName.test(firstName)){
        errors.push('Field Imię should contain only letters!');
    }
    if(lastName.length === 0){
        errors.push('Field Nazwisko is required!');
    }
    const regLastName = /^[a-zA-ZąćężźłóńśĄĆĘŻŹŁÓŃŚ\-]+$/;
    if(!regLastName.test(lastName)){
        errors.push('Field Nazwisko should contain only letters and "-"!');
    }
    if(street.length === 0){
        errors.push('Field Ulica is required!');
    }
    const regStreet = /^[a-zA-ZąćężźłóńśĄĆĘŻŹŁÓŃŚ\-]+$/;
    if(!regStreet.test(street)){
        errors.push('Field Ulica should contain only letters and "-"!');
    }
    if(houseNumber.length === 0){
        errors.push('Field Numer budynku is required!');
    }
    const regHouseNumber = /^[0-9]+$/;
    if(!regHouseNumber.test(houseNumber)){
        errors.push('Numer budynku should be a number');
    }
    
    if(zip.length === 0){
        errors.push('Field Kod pocztowy is required!');
    }
    const regZip = /^\d{2}-\d{3}$/;
    if(!regZip.test(zip)){
        errors.push('Kod pocztowy should be compatible with pattern 00-000');
    }
    if(city.length === 0){
        errors.push('Field Miejscowość is required!');
    }
    const regCity = /^[a-zA-ZąćężźłóńśĄĆĘŻŹŁÓŃŚ\-]+$/;
    if(!regCity.test(city)){
        errors.push('Field Miejscowość should contain only letters and "-"!');
    }
    if(voivodeship.length === 0){
        errors.push('Województwo should be selected!');
    }

    if(errors.length > 0 ){
        
        ulEl.innerHTML = '';

        errors.forEach(function(err){
            const newLi = document.createElement('li');
            newLi.innerText = err;
            ulEl.appendChild(newLi);
        });
    }
    else{
        ulEl.innerHTML = '';
        const newLi = document.createElement('li');
        newLi.innerText = 'Dane zostały wysłane prawidłowo!'
        //tutaj pewnie należałoby to zrobić inaczej, bo w tej sytuacji komunikat pojawia się w sumie przed wysłaniem formularza,
        //bo na początku funkcji jest e.preventDefault();, myślałam nad setTimeOut, ale nie mam pomysłu gdzie go umieścić
        ulEl.appendChild(newLi);
    }
 }
