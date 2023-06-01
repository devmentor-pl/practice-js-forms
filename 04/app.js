document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const inputOpacity = document.querySelector('input[name="opacity"]')
    inputOpacity.setAttribute('value', 0)
    setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}


function getChannelColor(colorInHex, channelName) {
    let start;
    switch (channelName) {
        case 'red':
            start = 1;
            break;
        case 'green':
            start = 3;
            break;
        case 'blue':
            start = 5;
            break;
    }

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec;
}

const inputColor = document.querySelector('input[name="color"]')
inputColor.addEventListener('change', changeColor)
let newColor
let opacity

function changeColor(e) {
    const boxElement = document.querySelector('.box');
    newColor = e.target.value

    setBoxShadow(boxElement, newColor, opacity)
}

const inputOpacity = document.querySelector('input[name="opacity"]')
inputOpacity.addEventListener('change', changeOpacity)
inputOpacity.addEventListener('mousemove', changeOpacity)

function changeOpacity(e) {
    const boxElement = document.querySelector('.box');
    let rangeValue

    if (!newColor) {
        newColor = "#000000"
    }
    if (e.type === 'change' || e.type === "mousemove" && e.buttons === 1) {
        rangeValue = e.target.value
    }
    if (rangeValue) {
        opacity = (100 - rangeValue) / 100 // nie jestem pewna czy dobrze zrozumialam, ale zakładam że range = 0 to opacity = 1, dlatego zmieniłam początkowe value dla inputa (z 100 na 0). Nie wiem czy mogłam ingerować w funkcję init. :)
        setBoxShadow(boxElement, newColor, opacity)
    }
}

