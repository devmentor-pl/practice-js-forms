const formEl = document.forms[0];
formEl.addEventListener('submit', checkData);

function checkData(e){
    e.preventDefault();
    const errorValues = [];
    const correctValues=[];

    const emailValue = e.target.elements.login.value;
    if(!checkEmail(emailValue)){
        errorValues.push(e.target.elements.login);
    }
    else {
        correctValues.push(e.target.elements.login);
    }

    const pass1Value = e.target.elements.pass1.value;
    const pass2Value = e.target.elements.pass2.value;
    if(!checkPassword(pass1Value,pass2Value)){
        errorValues.push(e.target.elements.pass1);
        errorValues.push(e.target.elements.pass2);
    }
    else{
        correctValues.push(e.target.elements.pass1);
        correctValues.push(e.target.elements.pass2);
    }

    const acceptBoxValue = e.target.elements.accept;
    if(!acceptBoxValue.checked){
        errorValues.push(acceptBoxValue);
    }
    else {
        correctValues.push(acceptBoxValue);
    }

    showIncorrectValues(errorValues);
    showCorrectValues(correctValues);
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
    if(!errorValues.length){
        console.log("Done")
    }
    else {
        // alert('Formularz zawiera bledy - wpisz poprawne dane')
        errorValues.forEach(function(item){
            item.previousElementSibling.style.color= "red";
        });
    }
}

function showCorrectValues(correctValues){
    correctValues.forEach(function(item){
        item.previousElementSibling.style.color= "green";
    });
}

