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

const inputColor = document.querySelector('input[name="color"]')
inputColor.addEventListener('change', changeColor)

function changeColor(e) {
    const boxElement = document.querySelector('.box');
    const newColor = e.target.value
    const rangeInputOpacity = inputOpacity.value
    const opacity = countOpacity(rangeInputOpacity)

    setBoxShadow(boxElement, newColor, opacity)
}

const inputOpacity = document.querySelector('input[name="opacity"]')
inputOpacity.addEventListener('change', changeOpacity)
inputOpacity.addEventListener('mousemove', changeOpacity)

function changeOpacity(e) {
    const boxElement = document.querySelector('.box');
    const newColor = inputColor.value

    if (e.type === 'change' || e.type === "mousemove" && e.buttons === 1) {
        const rangeValue = e.target.value
        const opacity = countOpacity(rangeValue)
        setBoxShadow(boxElement, newColor, opacity)
    }
}

function countOpacity(range) {
    return range / 100
}