document.addEventListener('DOMContentLoaded', init);

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

// 

const rangeEl = document.querySelector('[name=opacity]');
const colorEl = document.querySelector('[name=color]');
const boxElement = document.querySelector('.box')

rangeEl.addEventListener('mousemove', changeOpacity)
rangeEl.addEventListener('change', changeOpacity )
colorEl.addEventListener('change', changeColor)



function changeOpacity(e) {
    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    if( isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
        const color = colorEl.value
        const opacity = (e.target.value)/100
        setBoxShadow(boxElement,color, opacity)
    }
}

function changeColor(e) {
    const opacity = rangeEl.value / 100;
    const color = e.target.value;
     setBoxShadow(boxElement, color, opacity);
}


