const formEl = document.querySelector('form');
formEl.noValidate = true;
const errors = [];

formEl.addEventListener('submit', checkData);

function checkData(e){
    e.preventDefault();
    const login = e.target.elements.login;
    const pass1 = e.target.elements.pass1;
    const pass2 = e.target.elements.pass2;
    const accept = e.target.elements.accept;
    

    if(!login.value.includes('@')){
        errors.push(login);
     
    }

    if(pass1.value !== pass2.value || pass1.value.length < 6){
        errors.push(pass1, pass2);
        
    }

    if(!accept.checked){
        errors.push(accept);
        
    }
    
    if(errors.length > 0){
        e.preventDefault();

        errors.forEach(el =>{
            
            const label = el.previousElementSibling;
            label.setAttribute('style', 'color:red');
        });

    } else {
        console.log('done');
    }
}

