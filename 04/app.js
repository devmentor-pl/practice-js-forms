var color;

document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

const sectionEl = document.querySelector('.panel');
const colorEl = sectionEl.firstElementChild;
const rangeEl = sectionEl.lastElementChild;

colorEl.addEventListener('change', changeColor);

rangeEl.addEventListener('change', changeOpacity);
rangeEl.addEventListener('mousemove', changeOpacity);


function changeColor(e) {
    const boxElement = document.querySelector('.box');
    color = e.target.value;
    setBoxShadow(boxElement, color);
}

function changeOpacity(e) {
    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;

    if (isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
        const boxElement = document.querySelector('.box');
        let opacityShow = e.target.value / 100;
        setBoxShadow(boxElement, color, opacityShow);
    }
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


