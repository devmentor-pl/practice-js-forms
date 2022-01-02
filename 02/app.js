const formEl = document.forms[0];
formEl.addEventListener('submit', checkData);

function checkEmail(dataEmail){
    const regExp = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i; //flaga "i" - ignoruje wielkosc liter, krótszy zapis wyrazenia
    if(dataEmail.match(regExp)){
        return dataEmail;
    }
    return false;
}

function checkErrors(errors){
    if(!errors.length){
        console.log("Done")
    }
    else {
        errors.forEach(function(item){
            item.previousElementSibling.style.color= "red";
        });
    }
}


function checkData(e){
    e.preventDefault();
    const errors = [];

    const email = e.target.elements.login.value;
    if(!checkEmail(email)){
        errors.push(e.target.elements.login);
    }

    // Check password
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    if((pass1 !== pass2) || (pass1.length<=5)) {
        errors.push(e.target.elements.pass1);
        errors.push(e.target.elements.pass2);
    }

    // Check accept checkbox
    const acceptBox = e.target.elements.accept;
    if(!acceptBox.checked){
        errors.push(e.target.elements.accept);
    }

    checkErrors(errors);
}

