const formElement = document.querySelector('form')
const ulElement = document.createElement('ul')
formElement.addEventListener('submit', checkData)

function changeColor(element, color){
    element.parentElement.style.color = color
}

function checkData(e) {
    e.preventDefault();
    const errors = []
    const password1 = e.target.elements.pass1
    const password2 = e.target.elements.pass2
    const accept = e.target.elements.accept

    if(password1.value.length < 6){
        errors.push('Please enter password containing minimum 6 signs.')
        changeColor(password1, 'red')
    } else {
        changeColor(password1, 'black')
    }

    if(password1.value !== password2.value){
        errors.push('Please enter the same passwords')
        changeColor(password2, 'red')
    } else {
        changeColor(password2, 'black')
    }

    if (!accept.checked) {
        errors.push('Please accept regulations!')
        changeColor(accept, 'red')
    } else {
        changeColor(accept, 'black')
    }

    if(errors.length > 0){
        formElement.appendChild(ulElement)
        ulElement.innerText = ''

        errors.forEach(function(item){
            const liElement = document.createElement('li')
            liElement.innerText = item
            ulElement.appendChild(liElement)
            
        })
    } else {
        ulElement.innerText = ''
        console.log('done')
    }

}







