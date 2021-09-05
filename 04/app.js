document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const colorPickerEl = document.querySelector('input[type="color"]');
    colorPickerEl.addEventListener('change', function(e) {
        const color = e.target.value;
        const range = rangeEl.value;
        setBoxShadow(boxElement, color);
    })

    const getCurrentRangeValue = function(e) {}
    const getCurrentColorValue = function(e) {}

    const rangeEl = document.querySelector('input[type="range"]');
    rangeEl.addEventListener('change', function(e) {
        const range = parseInt(e.target.value)/100;
        setBoxShadow(boxElement, colorPickerEl.value, getCurrentRangeValue());
    });

    rangeEl.addEventListener('mousemove', function(e) {
        const range = parseInt(e.target.value)/100;
        setBoxShadow(boxElement, colorPickerEl.value, range);
    });
}

function changeOpacity(e) {
    const range = parseInt(e.target.value)/100;
    setBoxShadow(boxElement, colorPickerEl.value, range);
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


