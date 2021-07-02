document.addEventListener('DOMContentLoaded', init);

const opacityEl = document.querySelector('[name="opacity"]');
const colorEl = document.querySelector('[name="color"]');
const boxElement = document.querySelector('.box');
colorEl.addEventListener('change', changeColor);
opacityEl.addEventListener('change', changeOpacity);
opacityEl.addEventListener('mousemove', changeOpacity);


function changeColor(e) {
    const opac = Number(opacityEl.value) / 100;
    const colorInHex = e.target.value;
    setBoxShadow(boxElement, colorInHex, opac);
}

function changeOpacity(e) {
    const opac = Number(e.target.value) / 100;
    setBoxShadow(boxElement, colorEl.value, opac);
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