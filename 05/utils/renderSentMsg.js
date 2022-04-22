const renderSentMsg = (container) => {
    const resultText = document.createElement('h1')
    resultText.innerText = 'Form has been sent!'
    container.style.textAlign = 'center'
    container.style.marginTop = '30px'
    container.appendChild(resultText)
    document.body.appendChild(container)
}

export default renderSentMsg