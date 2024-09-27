document.addEventListener('DOMContentLoaded', init);
const rangeEl = document.querySelector("input[type=range]");
const colorEl = document.querySelector("input[type=color]");
colorEl.value = "#000000";
const boxElement = document.querySelector('.box');
colorEl.addEventListener('change', changeBoxColor);
rangeEl.addEventListener('mousemove', changeOpacity);
rangeEl.addEventListener('change', changeOpacity);
 
function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, "#000000");
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    console.log(colorInHex);
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
    // console.log(colorInHex);
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
    // console.log(channelColorHex)
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}

function changeBoxColor(e) {
    setBoxShadow(boxElement, e.target.value);
}

function changeOpacity(e) {
    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    if(isMouseMoveEvent && isMouseLeftButtonPres || !isMouseMoveEvent) {
        boxElement.style.opacity = (rangeEl.value)/100;
    }
}

