document.addEventListener('DOMContentLoaded', init);
const inputs = document.querySelectorAll('input')

const colorInput = inputs[0]
const opacityInput = inputs[1]

const changeBox = function() {
    const color = colorInput.value
    const opacity = opacityInput.value / 100
    const boxElement = document.querySelector('.box')
    setBoxShadow(boxElement, color, opacity)
}

colorInput.addEventListener('change', changeBox)
opacityInput.addEventListener('change', changeBox)


function init() {
    const boxElement = document.querySelector('.box');
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
    switch(channelName) {
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


