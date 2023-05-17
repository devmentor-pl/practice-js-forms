document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const inputColorEl = document.querySelector('input[type="color"]');
    const inputRangeEl = document.querySelector('input[type="range"]');

    inputColorEl.addEventListener('change', colorAndRangeHandler)
    inputRangeEl.addEventListener('change', colorAndRangeHandler)
    inputRangeEl.addEventListener('mousemove', colorAndRangeHandler)
    
    function colorAndRangeHandler() {
        const color = inputColorEl.value;
        const range = inputRangeEl.value / 100
        setBoxShadow(boxElement, color, range)
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


