document.addEventListener('DOMContentLoaded', init);
const boxElement = document.querySelector('.box')
let opacity = 1
const colorEl = document.querySelector('input[type="color"]')
const opacityEl = document.querySelector('input[type="range"]')

colorEl.addEventListener('change', getNewColor)
opacityEl.addEventListener('change', getNewOpacity)

function init() {
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

function getNewColor() {
    setBoxShadow(boxElement, colorEl.value, opacity)
}

function getNewOpacity() {
    opacity = opacityEl.value / 100
    setBoxShadow(boxElement, colorEl.value, opacity)

}
