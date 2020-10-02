document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const panel = document.querySelector('.panel')
    panel.addEventListener('change', function () { setBoxShadow(boxElement) });
    setBoxShadow(boxElement)
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const rangeEl = document.querySelector('[name="opacity"]');
    const colorEl = document.querySelector('[name="color"]');

    opacity = rangeEl.value / 100
    colorInHex = colorEl.value

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


