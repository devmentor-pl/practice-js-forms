document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const colorEl = document.querySelector('input[type=color]')
    const rangeEl = document.querySelector('input[type=range]')

    setBoxShadow(boxElement, '#000000');

    colorEl.addEventListener('change', handleColor)

    function handleColor() {
        const color = colorEl.value
        setBoxShadow(boxElement, color, rangeEl.value)
    }

    rangeEl.addEventListener('change', handleRange)
    rangeEl.addEventListener('mousemove', handleRange)

    function handleRange() {
        const opacity = rangeEl.value / 100
        setBoxShadow(boxElement, colorEl.value, opacity)
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


