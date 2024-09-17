document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const colorInputEl = document.querySelector('input[type=color]');
    const rangeInputEl = document.querySelector('input[type=range]');

    colorInputEl.addEventListener('change', function () {
        const color = colorInputEl.value;
        setBoxShadow(boxElement, color, rangeInputEl.value);
    });

    rangeInputEl.addEventListener('change', function () {
        const opacity = rangeInputEl.value/100;
        setBoxShadow(boxElement, colorInputEl.value, opacity);
    });

    rangeInputEl.addEventListener('mousemove', function () {
        const opacity = rangeInputEl.value/100;
        setBoxShadow(boxElement, colorInputEl.value, opacity);
    });

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
