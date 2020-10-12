document.addEventListener('DOMContentLoaded', init);

const colorPickerEl = document.querySelector('input[type="color"]');
const opacitySlideEl = document.querySelector('input[type="range"]');
const boxElement = document.querySelector('.box');
let currentColor = '#000000';
let currentOpacity = 1;

colorPickerEl.addEventListener('change', setColor);
opacitySlideEl.addEventListener('change', setOpacity);

function setColor(e) {
    currentColor = e.target.value;
    setBoxShadow(boxElement, currentColor, currentOpacity);
}

function setOpacity(e) {
    currentOpacity = e.target.value / 100;
    setBoxShadow(boxElement, currentColor, currentOpacity);
}

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, currentColor);
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


