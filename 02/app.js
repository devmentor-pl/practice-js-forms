const form = document.querySelector('form');
const labels = Array.from(document.querySelectorAll('label'));
console.log(labels);

form.addEventListener('submit', checkData);

function checkData(e){
    e.preventDefault();
    const errors = [];
    const email = e.target.elements.login;
    const password1 = e.target.elements.pass1;
    const password2 = e.target.elements.pass2;
    const checkbox = e.target.elements.accept;

    if(!email.value.includes('@')){
        errors.push(email);
    }
    if(password1.value.length < 6 || password1.value !== password2.value){
        errors.push(password1, password2);
    }
    if(!checkbox.checked){
        errors.push(checkbox);
    }
    if(errors.length > 0){
        for(let err of errors){
            const label = err.previousElementSibling;
            label.style.color = 'red';
        }
    }else{
        console.log('done');
    }
}