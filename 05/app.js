const formElement = document.querySelector('form')

const ulElement = document.querySelector('.messages')
formElement.addEventListener('submit', checkData)

function changeColor(element, color){
    element.style.color = color
    element.parentElement.style.color = color
}
function checkData(e){
    e.preventDefault() 
    const errors = []
    const inputElement = document.querySelectorAll('input')
    inputElement.forEach(function(input){  
        
        if(input.name === 'firstName' || input.name === 'lastName'|| input.name === 'city'){
            enterProperString(input)
        }
        if(input.name === 'street'){
            enterProperStreet(input)
        }
        if(input.type === 'number'){
            enterProperNumber(input)
        }
        if(input.name === 'zip'){
            enterProperZip(input)
        }
       
    })
    const selectElement = document.querySelector('select')
    if(selectElement.value === ''){
        errors.push(`Please choose ${selectElement.name}`)
        changeColor(selectElement, 'red')
    } else {
        changeColor(selectElement, 'black')
}   
    
getErrors()

function getErrors(){
    if(errors.length > 0){
        ulElement.innerText = ''
        errors.forEach(function(item){
            const liElement = document.createElement('li')
            liElement.innerText = item
            ulElement.appendChild(liElement)
       })
} else {
       ulElement.innerText = ''
       alert('Thank You, data was send correctly!')
    }
}
function enterProperString(input){
    if(input.value.length < 2 || /\d/.test(input.value)){
        errors.push(`Please enter correct ${input.name}`)
        changeColor(input, 'red')
    } else {
        changeColor(input, 'black')
}   
}
function enterProperStreet(input){
    if(input.value.length < 2){
        errors.push(`Please enter correct ${input.name}`)
        changeColor(input, 'red')
    } else {
        changeColor(input, 'black')
}   
}
function enterProperNumber(input){
    if(isNaN(input.value) || input.value.length < 1 || input.value < 1){
        errors.push(`Please enter correct ${input.name}`)
        changeColor(input, 'red')
    } else {
        changeColor(input, 'black')
}   
}
function enterProperZip(input){
    if(!/[0-9]{2}-[0-9]{3}/.test(input.value)){
        errors.push(`Please enter ${input.name}-code according to the pattern (xx-xxx)`)
        changeColor(input, 'red')
    } else {
        changeColor(input, 'black')
}  
    }

}

