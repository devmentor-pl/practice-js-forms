document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

const colorEl = document.querySelector('input[type="color"]')
const rangeEl = document.querySelector('input[type="range"]')
const boxElement = document.querySelector('div')

colorEl.addEventListener('change', changeColor);

function changeColor() {
    const color = colorEl.value;
    setBoxShadow(boxElement, color, rangeEl.value);
}

rangeEl.addEventListener('mousemove', changeOpacity);
rangeEl.addEventListener('change', changeOpacity);

function changeOpacity(){
    const opacity = rangeEl.value*0.01;
    setBoxShadow(boxElement, colorEl.value, opacity);
}

function invertColor(hex) {
    let color = '#';
    for(let i=1; i<=6; i=i+2) {
        const dec = 255 - parseInt(hex.substr(i, 2), 16);
        color += (dec < 16 ? '0' : '') + dec.toString(16);
}
    return color;
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


