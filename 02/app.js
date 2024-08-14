const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mail = e.target.elements.login.value;
  const pass1 = e.target.elements.pass1.value;
  const labelPass1 = form.querySelector('label[for="formPass1"]')
  const pass2 = e.target.elements.pass2.value;
  const labelPass2 = form.querySelector('label[for="formPass2"]')
  const checkbox = e.target.elements.accept;
  const labelCheckbox = form.querySelector('label[for="formAccept"]')
  const labelEmail = form.querySelector('label[for="formLogin"]')

  const isCorrectEmail = mail.length !== 0
  const isCorrectPassword = pass1 === pass2 && pass1.length > 6
  const isCorrectAccept = checkbox.checked
  const isCorrectData = isCorrectAccept && isCorrectEmail && isCorrectPassword



  if (!isCorrectEmail) {
    labelEmail.setAttribute('style', 'color: red;')
  } 
  
  if (!isCorrectPassword) {
    labelPass1.setAttribute('style', 'color: red;')
    labelPass2.setAttribute('style', 'color: red;')
  } 
  
  if (!isCorrectAccept) {
    labelCheckbox.setAttribute('style', 'color: red;')
  } 
  
  if (isCorrectData) {
  
    console.log('done');
    
  }
});
