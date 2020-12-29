document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
    const colorPickerEl = document.querySelector('[name="color"]');
    colorPickerEl.addEventListener('mousemove', changeColor);
    colorPickerEl.addEventListener('change', changeColor);

    const rangeEl = document.querySelector('[name="opacity"');
    rangeEl.addEventListener('input', changeOpacity);
}

function changeOpacity(event) {
    const boxElement = document.querySelector('.box');
    const opacityRange = event.target.value;
    const currentColor = document.querySelector('[name="color"]').value;
    setBoxShadow(boxElement, currentColor, opacityRange/100);
}

function changeColor(event) {
    const boxElement = document.querySelector('.box');
    const color = event.target.value;
    const curentOpacity = document.querySelector('[name="opacity"').value;
    setBoxShadow(boxElement, color, curentOpacity);
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


