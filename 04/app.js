document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const colorInput = document.querySelector('input[name="color"]');
    const opacityInput = document.querySelector('input[name="opacity"]');

    if (boxElement) {
        setBoxShadow(boxElement, '#000000');
        colorInput && colorInput.addEventListener('input', (e) => setBoxShadow(boxElement, e.currentTarget.value, opacityInput.value / 100));
        opacityInput && opacityInput.addEventListener('input', (e) => setBoxShadow(boxElement, colorInput.value, e.currentTarget.value / 100));
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