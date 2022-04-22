document.addEventListener('DOMContentLoaded', init)

function init() {
    const boxElement = document.querySelector('.box')
    const colorInput = document.querySelector('input[name="color"]')
    const rangeInput = document.querySelector('input[name="opacity"]')
    setBoxShadow(boxElement, '#000000')

    colorInput.addEventListener('change', function (e) {
        onColorChangeHandler(e, boxElement)
    })
    rangeInput.addEventListener('change', function (e) {
        const currentColor = colorInput.value
        onOpacityChangeHandler(e, boxElement, currentColor)
    })
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')},
        ${getChannelColor(colorInHex, 'green')},
        ${getChannelColor(colorInHex, 'blue')},
        ${opacity}
    )`

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`
}


function getChannelColor(colorInHex, channelName) {
    let start
    switch (channelName) {
        case 'red':
            start = 1
            break
        case 'green':
            start = 3
            break
        case 'blue':
            start = 5
            break
    }

    const channelColorHex = colorInHex.substr(start, 2)
    const channelColorDec = parseInt(channelColorHex, 16)

    return channelColorDec
}

const onColorChangeHandler = (e, boxElement) => {
    const currentColor = e.target.value
    setBoxShadow(boxElement, currentColor)
}
const onOpacityChangeHandler = (e, boxElement, currentColor) => {
    const newOpacity = e.target.value / 100
    setBoxShadow(boxElement, currentColor, newOpacity)
}

