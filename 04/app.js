document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const panelEl = document.querySelector('.panel');
    panelEl.addEventListener('input', function() { setBoxShadow(boxElement)});
    setBoxShadow(boxElement);
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorPickerEl = document.querySelector('[name="color"]');
    const rangeEl = document.querySelector('[name="opacity"]');

    colorInHex = colorPickerEl.value;
    opacity = rangeEl.value / 100;

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