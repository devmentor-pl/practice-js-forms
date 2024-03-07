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

const boxEl = document.querySelector('.box');
const colorInput = document.querySelector('input[name="color"]');
const colorOpacity = document.querySelector('input[name="opacity"]');


colorInput.addEventListener('input', updateShadow);
colorOpacity.addEventListener('input', updateShadow);

function updateShadow() {
    let colorValue = colorInput.value;
    let opacityValue = colorOpacity.value / 100;

    boxEl.style.boxShadow = `0 0 5px 5px ${colorValue}${Math.round(opacityValue * 255).toString(16)}`;
};