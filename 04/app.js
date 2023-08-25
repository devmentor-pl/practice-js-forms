document.addEventListener('DOMContentLoaded', init);
const inputOpacity = document.querySelector('[name="opacity"]');
const inputColor = document.querySelector('[name="color"]');
const box = document.querySelector('.box');



function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
    inputOpacity.addEventListener('change', updateColor);
    inputColor.addEventListener('change', updateColor);
}

function updateColor () {
    const opacity = parseFloat(inputOpacity.value);
    const color = inputColor.value;
    console.log(color)
    setBoxShadow(box, color, opacity);
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


