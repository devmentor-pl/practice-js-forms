document.addEventListener("DOMContentLoaded", function () {
    console.log('dom')
    const form = document.querySelector('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const errors =[];
        console.log('submit');
        const login = form.elements.login.value;
        if(!login.includes('@')){
            const label = form.elements.login.previousElementSibling;
            console.log(label);
            errors.push(label);

        }
        const pass1 = form.elements.pass1.value;
        const pass2 = form.elements.pass2.value;
        if (pass1.length <=6){
            errors.push(form.elements.pass1.previousElementSibling)
        }
        if (pass1 !== pass2) {
            errors.push(form.elements.pass2.previousElementSibling);
        }
        const accept = form.elements.accept.checked;
        if(!accept){
            errors.push(form.elements.accept.previousElementSibling);
        }
        const labels = document.querySelectorAll('label');
        labels.forEach(function(label){
            label.style.color=''
        })
        errors.forEach(function(error){
            error.style.color='red'
        });
        if (errors.length === 0) {
            console.log('done');
        }
        console.log(login)
    })

})