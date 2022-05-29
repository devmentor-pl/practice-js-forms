
const formEl = document.querySelector('form');


function registerUser(e) {
    e.preventDefault();
	const emailEl = e.target.elements.login;
	const firstPass = e.target.elements.pass1;
	const secondPass = e.target.elements.pass2;
	const wrongPass = false;
	const accept = e.target.elements.accept;
    
	const errors = [];
	
	if (!emailEl.value.includes('@')) {
        errors.push(emailEl);
	}
    
	if (firstPass.value.length < 6) {
        errors.push(firstPass);
	}
    
	if (secondPass.value.length < 6) {
        errors.push(secondPass);
	}
    
	if (firstPass.value !== secondPass.value) {
        errors.push(wrongPass);
	}
    
	if (!accept.checked) {
        errors.push(accept);
	}
    
	for (const el of formEl.elements) {
        if (el.previousElementSibling) {
            errorsView(el, 'black');
		}
	}
    
	if (errors.length > 0) {
        e.preventDefault();
        
		errors.forEach(function (element) {
            if (element) {
                errorsView(element, 'red');
			}
            
			if (!element) {
                pass2El.previousElementSibling.style.color = 'red';
			}
		});
	}
}

const errorsView = function (el, color) {
    const previouseEl = el.previousElementSibling;
	if (previouseEl !== undefined) {
        el.previousElementSibling.style.color = color;
	}
};

formEl.addEventListener('submit', registerUser);