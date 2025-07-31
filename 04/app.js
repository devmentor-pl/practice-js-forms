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

const boxElement = document.querySelector('.box');
const colorPicker = document.querySelector('[name=color]');
const opacitySetter = document.querySelector('[name=opacity]');
colorPicker.addEventListener('change', changeColor)
opacitySetter.addEventListener('mousemove', changeOpacity);
opacitySetter.addEventListener('change', changeOpacity);

function changeColor(e) {
    const opacity = opacitySetter.value / 100;
    const color = e.target.value;
    setBoxShadow(boxElement, color, opacity);
}

function changeOpacity(e) {
    const color = colorPicker.value;
    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftBtnPress = e.buttons === 1;
    if (isMouseMoveEvent && isMouseLeftBtnPress || !isMouseMoveEvent) {
        const opacity = e.target.value / 100;
        setBoxShadow(boxElement, color, opacity);
    }
}


