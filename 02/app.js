document.addEventListener('DOMContentLoaded',init)
function init(){
    console.log('DOM')

const form=document.querySelector('form')
const labelList=document.querySelectorAll('label')
form.noValidate=true;
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('sub')
const email=e.target.elements.
login;
const password1=form.elements.pass1;
const password2=form.elements.pass2;
const errors=[];
const confirm =form.elements.accept;
if(email.value.indexOf('@') === -1){
    errors.push(email.previousElementSibling)
}
if(password1.value !== password2.value || password1.length <=6 ){
 errors.push(password1.previousElementSibling)
    errors.push(password2.previousElementSibling)
}  

if(!confirm.checked){
    const numberAgreement=confirm.value;
    alert('confirm agreement no: ' + numberAgreement)
    errors.push(confirm.previousElementSibling)
}else{
    alert('thankyou data was send')
}

labelList.forEach(function(er) {
    er.style.color=' ';
})
console.log(errors)
if(errors>0){

errors.forEach(function (er){
er.style.color='red';
console.log(er)
})
}else{
console.log('done')
}





})


}