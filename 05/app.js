const form = document.querySelector('form');
const messageList = form.querySelector('.messages');
form.addEventListener('submit', checkData)

function checkData(e){
    messageList.innerHTML = '';
    const fields = Array.from(e.target.elements);
    const firstNameInput = e.target.elements.firstName;
    const lastNameInput = e.target.elements.lastName;
    const streetInput = e.target.elements.street;
    const houseInput = e.target.elements.houseNumber;
    const flatInput = e.target.elements.flatNumber;
    const zipInput = e.target.elements.zip;
    const cityInput = e.target.elements.city;
    const zipPattern = new RegExp(`${zipInput.pattern}`);
    const isMatch = zipPattern.test(zipInput.value);

    if(fields.some(element=>element.required && element.value.length <= 0)){
        invalidValue()
    }
    for(element of fields){
            element.style.border = 'none';
        if(element.required && element.value.length <= 0){
            element.style.border = '1px solid red';
        }
    }
    
    if(/\d/.test(firstNameInput.value)){
        const element = 'First name';
        invalidValue(element, firstNameInput.value);
    }
    if(/\d/.test(lastNameInput.value)){
        const element = 'Last name';
        invalidValue(element, lastNameInput.value);
    }
    if(/\d/.test(streetInput.value)){
        const element = 'Street name';
        invalidValue(element, streetInput.value);
    }
    if(flatInput.value <=0 && flatInput.value.length !== 0){
        const element = 'Flat number';
        invalidValue(element, parseInt(flatInput.value));
    }
    if(houseInput.value <=0){
        const element = 'House number';
        invalidValue(element, parseInt(houseInput.value));
    }
    if(/\d/.test(cityInput.value)){
        const element = 'City name';
        invalidValue(element, cityInput.value);
    }

    if(zipInput.value.length > 6 || !isMatch){
        const element = 'Zip number';
        invalidValue(element, parseInt(zipInput.value));
    }

    function invalidValue(element, value){
        const message = document.createElement('li');
        if(typeof value === 'number'){
            message.innerText = `${element} contains invalid number!`;
        }else if(typeof value === 'string'){
            message.innerText = `${element} contains invalid characters!`;
        }else if(typeof value === 'undefined'){
            message.innerText = `Marked fields are required`;
            
        }
        messageList.appendChild(message);
    }
    if(messageList.innerHTML !== ''){
        e.preventDefault();
    }else{
        alert('Provided data is valid');
    }
}
