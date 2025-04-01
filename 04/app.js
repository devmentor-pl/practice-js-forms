document.addEventListener('DOMContentLoaded', init);

function init() {
    const colorInput = document.querySelector('input[type="color"]');
    const opacityRangeInput = document.querySelector('input[type="range"]');
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');


    colorInput.addEventListener('input', handleColorChange);
    opacityRangeInput.addEventListener('input', handleOpacityChange);

    function handleColorChange(e) {
        const color = e.target.value;
        setBoxShadow(boxElement, color);
    }
    function handleOpacityChange(e) {
        const opacity = e.target.value / 100;
        boxElement.style.opacity = opacity;
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


