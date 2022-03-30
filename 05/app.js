const namePattern = /^[A-Za-ząćęłńóśźżĄĘŁŃÓŚŹŻ\s]*$/;
const zipPattern = /[0-9]{2}-[0-9]{3}$/;

document.addEventListener('DOMContentLoaded', init);

function init() {
    
    const formEl = document.querySelector('form');    

    formEl.addEventListener('submit', validateForm);
}

function validateForm(e) {

    const form = e.target;   
    const errors = []

    e.preventDefault();

    resetErrors(form);

    checkTextData(form,'firstName', errors);
    checkTextData(form,'lastName', errors);
    checkTextData(form,'street', errors);
    checkTextData(form, 'zip', errors, zipPattern);
    checkNumberData(form,'houseNumber', errors);
    checkNumberData(form,'flatNumber', errors, false);
    checkTextData(form,'city', errors);
    checkSelectData(form,'voivodeship', errors);
    
    showErrors(form, errors);
       
}

function showErrors(form, errors) {

    const listErr = form.querySelector('.messages');
    
    if (errors.length > 0) {

        errors.forEach(function(item){

            const errItem = document.createElement('li');       
            errItem.textContent = item.msg;
            listErr.appendChild(errItem);

            item.label.style = 'color : red';

        });
    } 
    else {
        
        const errItem = document.createElement('li');       
        errItem.textContent = 'Dane zostały wysłane prawidłowo';
        listErr.appendChild(errItem);
    }

}

function resetErrors(form) {

    const label = form.querySelectorAll('label');
    const listErr = form.querySelector('.messages');
    
    label.forEach(function(item){
        item.style = 'color : black';
    });
    
    listErr.textContent = '';
}

function checkTextData(form, name,  errors, pattern = namePattern) {
        
    const inputEl = form.elements[name];

    inputEl.value = inputEl.value.trim(); 

    if ((!pattern.test(inputEl.value)) || (inputEl.value.length === 0)) {

        const errMsg = `Wprowadzono niepoprawne dane w polu  ${inputEl.parentElement.innerText}`;
        const errLabel = inputEl.parentElement;

        errors.push(createObjErr(errMsg, errLabel));             
    }    
}

function checkNumberData(form, name, errors, required = true) {
   
    const inputEl = form.elements[name];
    const num = Number(inputEl.value);
   
    if ((num !== 0) || (required)) {

        if ((!Number.isInteger(num)) || (num <= 0)) {
            
            console.log(num);

            const errMsg = `Wprowadzono niepoprawne dane w polu  ${inputEl.parentElement.innerText}`;
            const errLabel = inputEl.parentElement;                

            errors.push(createObjErr(errMsg, errLabel));   
        }
    }    
}

function checkSelectData(form, name, errors) {

    const option = form.elements[name]; 

    if (option.value.length === 0) {
           
        const errMsg = `Nie wybrano województwa`;
        const errLabel = option.parentElement;    
        
        errors.push(createObjErr(errMsg, errLabel));
    }
}

function createObjErr(errMsg, errLabel) {
    
        const errObj = {};
        errObj.msg = errMsg;
        errObj.label = errLabel;

        return errObj;
}