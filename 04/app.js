document.addEventListener('DOMContentLoaded', init);

const inputRange = document.querySelector('input[name=opacity');
const inputColor = document.querySelector('input[name=color]');
const box = document.querySelector('.box');

inputRange.addEventListener('mousemove', changeOpacity);
inputRange.addEventListener('change', changeOpacity);
inputColor.addEventListener('change', changeColor);

function changeOpacity(e) {
    let currColor = inputColor.value
    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    if(isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
        setBoxShadow(box, currColor, e.target.value / 100);
    }
}

function changeColor(e) {
    const color = (e.target.value)
    setBoxShadow(box, color);
}


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