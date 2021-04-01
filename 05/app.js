const form = document.querySelector('form');
const messages = document.querySelector('ul');
const errors = [];
const nameInpt = document.querySelector("input[name='firstName']");
const lastNameInpt = document.querySelector("input[name='lastName']");
const streetInpt = document.querySelector("input[name='street']");
const houseInpt = document.querySelector("input[name='houseNumber']");
const zip = document.querySelector("input[name='zip']");
const city = document.querySelector("input[name='city']");
const select = document.querySelector('select');
const patterns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

form.setAttribute('novalidate', '');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errors.length = 0;
    messages.textContent = '';
    if(nameInpt.value === '')  errors.push('Podaj imię');
    if(lastNameInpt.value === '')  errors.push('Podaj nazwisko');
    if(streetInpt.value === '')  errors.push('Podaj ulicę');
    if(houseInpt.value === '' || parseInt(houseInpt.value) === 'NaN')  errors.push('Podaj nr budynku / Podałeś nr budynku w niepoprawnym formacie');
    if(checkPattern() >= 7 || checkPattern() < 6 || zip.value[2] !== '-' || zip.value.length > 6) errors.push('Podaj poprawny kod pocztowy');
    if(city.value === '') errors.push('Podaj nazwę miejscowości');
    if(select.value === '') errors.push('Wybierz województwo');
    renderErrors();

    if (!errors.length){
        nameInpt.value = '';
        lastNameInpt.value = '';
        streetInpt.value = '';
        houseInpt.value = '';
        document.querySelector("input[name='flatNumber']").value ='';
        zip.value = '';
        city.value = '';
        select.value = '';
    }
})

function checkPattern() {
    const valid = [];
    if(zip.value[2] === '-') valid.push('true');
    for(let i = 0; i < zip.value.length; i++) {      
        for(let j = 0; j < patterns.length; j++) {
            if(parseInt(zip.value[i]) === patterns[j]) valid.push('true');
        }
    }
    return valid.length
}

function renderErrors() {
    if(!errors.length) {
        const li = document.createElement('li');
        li.textContent = 'Dane zostały przesłane prawdiłowo ! :)';
        messages.appendChild(li);
    }
    for(let i=0; i<errors.length; i++){
        const li = document.createElement('li');
        li.textContent = errors[i];
        messages.appendChild(li);
    }
}