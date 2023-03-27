const formEl = document.forms[0];
const messages = document.querySelector('.messages')


formEl.addEventListener('submit', checkData);

function checkData(e) {
    e.preventDefault();
    messages.innerHTML="";

    const errors =[];
    handleUserData();
    handleErrorsLists();

    function handleUserData() {
        for(let i=0; (i<formEl.elements.length-1); i++) {
            if(formEl.elements[i]===formEl.elements["zip"]) {
                handleZipCode(formEl.elements[i]);
            } else {
                handleIfEmpty(formEl.elements[i]);
            }
        }
    }

    function handleIfEmpty(element) {
        if(element.value==="") {
            if(element===formEl.elements["voivodeship"]) {
                errors.push(`Element Województwo nie może być pusty!`);
            } else {
                errors.push(`Element ${element.parentElement.innerText} nie może być pusty!`);
            }
        }
    }
    
    function handleZipCode (element) {
        const correctFormat = /[0-9]{2}-[0-9]{3}/
        const matchFormat = element.value.match(correctFormat);
    
        if(element.value==="") {
            errors.push(`Element ${element.parentElement.innerText} nie może być pusty!`);   
        } else if (matchFormat===null) {
            errors.push("Nieprawidłowy format kodu pocztowego!");
        }
    }
    
    function handleErrorsLists () {
        if (errors.length > 0) {
            createErrorsList();
        } else {
            console.log('Formularz wypełniony prawidłowo!');
        } 
    }

    function createErrorsList() { 
        errors.forEach(function(error){
            const newLi = document.createElement('li');
            newLi.innerText = error
            messages.appendChild(newLi);
        })
        messages.style.backgroundColor = 'red';
    }
}






