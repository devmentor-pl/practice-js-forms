const renderErrorList = (input, label, msg, errorListEl) => {
    const currentLabelText = label.firstChild.textContent
    const liEl = document.createElement('li')

    liEl.innerText = `${currentLabelText ? currentLabelText.trim() : input.name}: ${msg}`
    liEl.style.color = '#e74c3c'

    errorListEl.appendChild(liEl)
}

export default renderErrorList