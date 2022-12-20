document.addEventListener('DOMContentLoaded', init);
const colorInput = document.querySelector('input[type=color]');
const rangeInput = document.querySelector('input[type=range]');

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


colorInput.addEventListener('input', function (e) {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, this.value)
});

rangeInput.addEventListener('input', function (e) {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, colorInput.value, this.value / 100)
});