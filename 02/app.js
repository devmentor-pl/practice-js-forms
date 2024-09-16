document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    if(formEl) {
        formEl.setAttribute('novalidate', "");
        formEl.addEventListener('submit', checkData);
        
        function checkData(e) {
            e.preventDefault();
            const email = e.target.elements.login;
            const pass1 = e.target.elements.pass1;
            const pass2 = e.target.elements.pass2;
            const accept = e.target.elements.accept;
            const labelList = document.querySelectorAll('label')
            const errors = []
        
            if(!email.value.includes('@')) {
                errors.push(email.previousElementSibling)
                
            }
        
            if(!(pass1.value.length > 6) || pass1.value !== pass2.value) {
                
                errors.push(pass1.previousElementSibling);
                errors.push(pass2.previousElementSibling);
            }
        
            if(!accept.checked) {
                errors.push(accept.previousElementSibling)
            }

            labelList.forEach(function(label) {
                label.style.color = '';
            })
        
            if(errors.length > 0) {
                console.log(errors)
        
                errors.forEach(function(label) {
                    label.style.color = 'red'
                })
            } else {
                console.log('done')
            }
        }
    
    }
    
}

