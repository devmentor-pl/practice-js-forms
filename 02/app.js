const formEl = document.forms[0];
formEl.addEventListener('submit', checkData);
const labelEls = document.querySelectorAll('label');

function checkData(e){
    e.preventDefault();

    const errorValues = [];

    const emailValue = e.target.elements.login.value;
    if(!checkEmail(emailValue)){
        errorValues.push(e.target.elements.login);
    }

    const pass1Value = e.target.elements.pass1.value;
    const pass2Value = e.target.elements.pass2.value;
    if(!checkPassword(pass1Value,pass2Value)){
        errorValues.push(e.target.elements.pass1);
        errorValues.push(e.target.elements.pass2);
    }

    const acceptBoxValue = e.target.elements.accept;
    if(!acceptBoxValue.checked){
        errorValues.push(acceptBoxValue);
    }
    showIncorrectValues(errorValues);
}

function checkEmail(dataEmail){
    const regExp = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i; //flaga "i" - ignoruje wielkosc liter, krótszy zapis wyrazenia
    if(dataEmail.match(regExp)){
        return dataEmail;
    }
    return false;
}

function checkPassword(pass1Value, pass2Value){
    if((pass1Value !== pass2Value) || (pass1Value.length<=5)){
        return false;
    }
    else {
        return true;
    }
}

function showIncorrectValues(errorValues){
    labelEls.forEach(function(item){
        item.style.color = 'black';
    })

    if(errorValues.length>0){
    errorValues.forEach(function(item){
        item.previousElementSibling.style.color= "red";

    });
    }
    else {
        console.log("Done");
    }
}



