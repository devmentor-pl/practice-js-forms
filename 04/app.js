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



const sectionPanel = document.querySelector('.panel');
const inputOpacity = sectionPanel.querySelector('[name=opacity');
const inputColor = sectionPanel.querySelector('[name=color]');
const boxElement = document.querySelector('.box');

inputOpacity.addEventListener('mousemove', setOpacity);
inputOpacity.addEventListener('change', setOpacity)
inputColor.addEventListener('change', changeColor)

function changeColor (e) {
    const color = (e.target.value)
    setBoxShadow(boxElement, color);
}

function setOpacity (e) {
    let currentColor = inputColor.value
    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    if(isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
        const opacityValue = e.target.value / 100;
        setBoxShadow(boxElement, currentColor, opacityValue);
    }
}


