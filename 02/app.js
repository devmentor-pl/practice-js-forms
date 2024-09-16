const formEl = document.querySelector('form');

formEl.addEventListener('submit', checkData);



function checkData(e){
    e.preventDefault()
    const emailEl = e.target.elements.login;
    const pass1El = e.target.elements.pass1;
    const pass2El = e.target.elements.pass2;
    const passIncorrect = false;
    const checkBoxEl = e.target.elements.accept;

    const errors = [];
    console.log(pass1El, pass2El);
    if(!emailEl.value.includes('@')){
        errors.push(emailEl);
    }
    
    if(pass1El.value.length < 6) {
        errors.push(pass1El);
    }

    if(pass2El.value.length < 6) {
        errors.push(pass2El);
    }

    if(pass1El.value !== pass2El.value) {
        errors.push(passIncorrect);
    }

    if(!checkBoxEl.checked){
        errors.push(checkBoxEl);
    }

    for(const el of formEl.elements){
        if(el.previousElementSibling) {
            errorsColors(el, 'black');
        };
    }

    if(errors.length > 0 ){
        e.preventDefault();

        errors.forEach(function(element){

            if(element) {
                errorsColors(element, 'red');
            }

            if(!element) {
                pass2El.previousElementSibling.style.color = 'red';
            }
        });
    }

}


const errorsColors = function(el, color) {
    const previouseEl = el.previousElementSibling;
    if(previouseEl !== undefined) {
        el.previousElementSibling.style.color = color;
    }
}