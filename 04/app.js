document.addEventListener('DOMContentLoaded', init);
const inputColor = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range"]');
const boxElement = document.querySelector('.box');
inputRange.addEventListener('change', invokeSetBoxShadow);
inputRange.addEventListener('mousemove', invokeSetBoxShadow)
inputColor.addEventListener('change', invokeSetBoxShadow);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

function invokeSetBoxShadow(e) {
    const inputColorValue = inputColor.value;
    const inputRangeValue = inputRange.value / 100;
    setBoxShadow(boxElement, inputColorValue, inputRangeValue);
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


