const formEl = document.querySelector('form');
formEl.noValidate = true;




function checkEmail () {
  const emailLabel = formEl.querySelector('[for=formLogin');
  const emailInput = formEl.querySelector('#formLogin')
  
  const emailValue = emailInput.value;
  if(!emailValue.includes('@')) {
    emailLabel.style.color = "red";
  } else {
    emailInput.style.border = ' 1px solid lightgreen'
    emailLabel.style.color = 'inherit'
  }
}

function checkData(e) {
  e.preventDefault();
  checkEmail()
}






formEl.addEventListener('submit', checkData)