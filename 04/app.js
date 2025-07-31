document.addEventListener('DOMContentLoaded', init);

function init() {
    const colorInput = document.querySelector('input[name="color"]');
    const opacityInput = document.querySelector('input[name="opacity"]');
    const boxElement = document.querySelector('.box');

    colorInput.addEventListener('input', handleColorChange);
    opacityInput.addEventListener('input', handleOpacityChange);

    setBoxShadow(boxElement, colorInput.value, opacityInput.value / 100);
}

function handleColorChange(event) {
    const colorValue = event.target.value;
    const opacityInput = document.querySelector('input[name="opacity"]');
    const boxElement = document.querySelector('.box');

    setBoxShadow(boxElement, colorValue, opacityInput.value / 100);
}

function handleOpacityChange(event) {
    const opacityValue = event.target.value / 100;
    const colorInput = document.querySelector('input[name="color"]');
    const boxElement = document.querySelector('.box');

    setBoxShadow(boxElement, colorInput.value, opacityValue);
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



