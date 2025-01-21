document.addEventListener('DOMContentLoaded', init);

const colorEl = document.querySelector('input[type="color"]');
const opacityEl = document.querySelector('input[type="range"]');
const box = document.querySelector('.box');

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

colorEl.addEventListener('change', function(){

    setBoxShadow(box, colorEl.value, opacityEl.value);
    
});

opacityEl.addEventListener('change', function() {
    
    setBoxShadow(box, colorEl.value, opacityEl.value/100);
});