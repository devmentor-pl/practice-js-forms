document.addEventListener('DOMContentLoaded',init)

function init(){
    console.log('DOM')

const form=document.querySelector('form')
console.log(form)
const ul=document.querySelector('.users-list')
console.log(ul)
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('sub')

    const first=e.target.elements.firstName.value
    const second=e.target.elements.lastName.value

    console.log(first.value)

    
    
const li=document.createElement('li')
li.classList.add(`user-list__person`)
li.innerText=first + " " + second
ul.appendChild(li)


})




}










