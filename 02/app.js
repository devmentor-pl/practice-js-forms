const formEl = document.querySelector('form');
//console.log(formEl);
const labelEl = document.querySelectorAll('label');
//console.log(labelEl)
//const ulEl = document.createElement('ul');
//ulEl.classList.add('errors');
//formEl.appendChild(ulEl)
formEl.noValidate = true;
formEl.addEventListener('submit', function(e)
{
   e.preventDefault();

    const emailEl= e.target.elements.login.value; // tutaj zawsze przedostatnia część po kropce to jest name w HTML
    const password1 = e.target.elements.pass1.value;
    const password2 = e.target.elements.pass2.value;
    const confirm = e.target.elements['accept'];
    const errorsArr = [];
   // const a = document.getElementById('formAccept')

   //console.log(a)
    if(!emailEl.includes('@')){
        errorsArr.push(e.target.elements.login);
        //e.target.elements.login.style.border = '1px solid red'
    }
    //else {
        //e.target.elements.login.style.border = '';
    //}

    if(password1 !== password2 || password1.length < 6)
    {
        errorsArr.push(e.target.elements.pass1, e.target.elements.pass2);
        //e.target.elements.pass1.style.border = '1px solid red';
        //e.target.elements.pass2.style.border = '1px solid red';
        //console.log(password2.length)
    }
       //else {
          // e.target.elements.pass1.style.border = '';
         //  e.target.elements.pass2.style.border = '';
       //}
    if(!confirm.checked){
        errorsArr.push(confirm);
       //a.style.border = '5px solid red'
       alert('musisz zaakceptować regulamin');
    }
        
    //console.log(errorsArr)
    if(errorsArr.length > 0)
    {
       //console.log('aa')
       errorsArr.forEach(function(e)
       {
           //console.log(e)
           e.style.border = '1px solid red';
       })
        
    }
    else{
        //e.style.border = '1px solid green'
         console.log('done');
         
    }

})

