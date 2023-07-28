document.addEventListener('DOMContentLoaded', init);

function init() {
    const colorEl = document.querySelector('input[type=color]');
    colorEl.addEventListener('change', function (e) {
        const color = e.target.value;
        setBoxShadow(boxElement, color);
    });
    const rangeEl = document.querySelector('input[type=range]');
    rangeEl.addEventListener('change', function (e) {
        const opacity = e.target.value * 0.01;
        setBoxShadow(boxElement, colorEl.value, opacity);
    })


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


