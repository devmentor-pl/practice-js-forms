const formEl = document.querySelector('form')
const emailEl = formEl.querySelector('input[name=login]');
const pass1 = formEl.querySelector('input[name=pass1]');
const pass2 = formEl.querySelector('input[name=pass2]');
const acceptReg = formEl.querySelector('input[name=accept]')
const registerBtn = formEl.querySelector('input[type=submit]');
const labelList = document.querySelectorAll('label')

let errors = [];
formEl.setAttribute('novalidate', '')

const handleForm = function(e) {
  e.preventDefault();
  checkErrors();
  console.log(errors)
    
  if (errors.length > 0) {
    labelList.forEach(function (el) {
      el.style.color = 'black'
    })
    errors.forEach(function (el) {
      el.previousElementSibling.style.color = 'red'
    
    })
    errors = [];
  } else {
    labelList.forEach(function (el) {
      el.style.color = 'black'
    })
    console.log('done')
  }
}

const checkErrors = function() {
  const password1 = pass1.value
  const password2 = pass2.value
  const email = emailEl.value
  
  if (!email.includes('@')) {
    errors.push(emailEl) } 
  if (password1.length <= 3) {
    errors.push(pass1) }
  if (password1 !== password2) {
    errors.push(pass1, pass2) }
  if (!acceptReg.checked) {
    errors.push(acceptReg) }
  else {
    // errors = [] 
    
  }
}

formEl.addEventListener('submit', handleForm);

  




