const defaultPattern = /^[A-Za-ząćęłńóśźżĄĘŁŃÓŚŹŻ\s]*$/; 

const rules =  { 'text'  : {'func' : checkTextData},
                'number' : {'func' : checkNumberData},
                }

document.addEventListener('DOMContentLoaded', init);

function init() {
    
    const formEl = document.querySelector('form');    
    const inputsList = formEl.querySelectorAll('input:not([type="submit"]');

    formEl.addEventListener('submit', validateForm.bind(this, inputsList));
}

function validateForm(inputsList, e) {

    const form = e.target;   
    const errors = []

    e.preventDefault();
    resetErrors(form);

    inputsList.forEach(function(item) { 
                
        rules[item.type].func(form.elements[item.name], errors, item.required, item.pattern);

    })

    checkSelectData(form,'voivodeship', errors);
    
    showErrors(form, errors);
       
}

function showErrors(form, errors) {

    const listErr = form.querySelector('.messages');
    
    if (errors.length > 0) {

        errors.forEach(function(item) {

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
        item.style = "color : '' ";
    });
    
    listErr.textContent = '';
}

function checkTextData(inputEl,  errors, required, pattern) {
        
    inputEl.value = inputEl.value.trim(); 

    if (pattern === '') {        
        pattern = defaultPattern; 
    }
    else {        
        pattern = new RegExp(`${pattern}$`);
    }   

    if ((!pattern.test(inputEl.value)) || ((inputEl.value.length === 0) && (required))) {

        const errMsg = `Wprowadzono niepoprawne dane w polu  ${inputEl.parentElement.innerText}`;
        const errLabel = inputEl.parentElement;

        errors.push(createObjErr(errMsg, errLabel));             
    }    
}

function checkNumberData(inputEl, errors, required) {
   
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