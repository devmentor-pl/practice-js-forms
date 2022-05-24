document.addEventListener('DOMContentLoaded', init);

function init(){
    const form=document.querySelector('form')
    //form.noValidate(true)
    form.addEventListener('submint',checkData)
    
    const ul=document.querySelector('.messages')
    

    function checkData(e){
        e.preventDefault()
    const firstName=form.elements.firstName
    const lastName=form.elements.lastName
    const street=form.elements.street;
    const houseNumber=form.elements.name.houseNumber
    const flatName=form.elements.flatNumber
    const zip=form.elements.zip
    const city=form.elements.city
    const fvoivodeship=form.elements.voivodeship;
    const errors=[]
    
    
    
    if(firstName.value.length ===0){
        errors.push('please write correct name')
    }
      if(lastName.value.length ===0){
        errors.push('please write correct name')
    }
        if(street.value.length ===0){
        errors.push('please write correct name')
    }
      if(Number.isNaN(Number(houseNumber.value))){
        errors.push('please write correct name')
    }
    if(Number.isNaN(Number(flatNumber.value))){
        errors.push('please write correct name')
    }

    if(!/[0-9]{2}-[0-9]{3}/.test(zip.value)){
 errors.push('please write correct pocztowy')
    }
 if(fcity.value.length ===0){
        errors.push('please write correct name')}
 if(voivodeship.value.length ===0){
        errors.push('please write correct name')}

if(errors.length===0){
    alert('data was send')
}else{
    ul.innerHTML=" "
    errors.forEach(er =>{
        const li=document.createElement('li')
        li.innerText=er
        ul.appendChild(li)
    })
}
}}