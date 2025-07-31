const form = document.querySelector("form")
const ulElement = document.querySelector("ul")
const liElements = ulElement.children
form.setAttribute('novalidate', "")
form.addEventListener("submit", validateInputs)

function validateInputs(e) {
    e.preventDefault()

    removeErrorMessages()

    let isUserNameValid = checkInput(form.elements[0])
    let isUserLastNameValid = checkInput(form.elements[1])
    let isStreetNameValid = checkInput(form.elements[2])
    let isHouseNumberValid = checkNumber(form.elements[3])
    let isFlatNumberValid = checkNumber(form.elements[4])
    let isZipValid = checkZipCode(form.elements[5])
    let isCityValid = checkInput(form.elements[6])
    let isVoivodeshipValid = checkVoivodeship(form.elements[7])
    addErrorStyling()

    let isForValid = isUserNameValid && isUserLastNameValid &&
        isStreetNameValid && isHouseNumberValid && isFlatNumberValid &&
        isZipValid && isCityValid && isVoivodeshipValid

    if (isForValid) {

        addCorrectMessage()
        addCorrectStyling()
    }
}

function addErrorMessage(inputName) {
    const newLiElement = document.createElement("li")
    newLiElement.innerText = 'Wprowadź poprawnie dane dla pola ' + inputName
    newLiElement.style.color = '#B94A48'
    ulElement.appendChild(newLiElement)
}

function removeErrorMessages() {
    Array.from(liElements).forEach(function (liElement) {
        ulElement.removeChild(liElement)
    });
}

function addErrorStyling() {

    if (ulElement.hasChildNodes()) {
        ulElement.style.border = "1px solid #B94A48"
        ulElement.style.borderRadius = "3px"
        ulElement.style.listStyleType = "none"
        ulElement.style.backgroundColor = "#F2DEDE"
    }
    else {
        ulElement.style.border = "none"
    }
}

function addCorrectStyling() {
    ulElement.style.border = "1px solid #BCDABD"
    ulElement.style.backgroundColor = "#BCDABD"
}

function addCorrectMessage() {
    const newLiElement = document.createElement("li")
    newLiElement.innerText = "Dane zostały wysłane prawidłowo"
    newLiElement.style.color = "green"
    ulElement.appendChild(newLiElement)
}




const checkInput = function (element) {
    let valid = false
    const label = element.parentElement
    const inputName = label.innerText
    if (element.value === "") {
        addErrorMessage(inputName)
    } else {
        valid = true
    }
    return valid
}

const checkNumber = function (element) {
    let valid = false
    const label = element.parentElement
    const inputName = label.innerText
    if (element.value <= "0") {
        addErrorMessage(inputName)
    } else {
        valid = true
    }
    return valid
}

const checkVoivodeship = function (element) {
    let valid = false
    const voivodeshipIndex = element.selectedIndex
    const inputName = "Województwo"
    if (voivodeshipIndex === 0) {
        addErrorMessage(inputName)
    } else {
        valid = true
    }
    return valid
}

const checkZipCode = function (element) {
    let valid = false
    const label = element.parentElement
    const zipCheck = element.checkValidity()
    const inputName = label.innerText
    if (zipCheck === false) {
        addErrorMessage(inputName)
    } else {
        valid = true
    }
    return valid
}


