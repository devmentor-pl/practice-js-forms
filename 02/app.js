const formEl = document.forms[0];
formEl.addEventListener('submit', checkData);

function checkData(e){
    e.preventDefault();
    const errors = [];

    // Check email
    const email = e.target.elements.login.value;
    const regExp = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    if(!email.match(regExp)){
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

    errors.forEach(function(item){
        item.previousElementSibling.style.color= "red";
    });
}
