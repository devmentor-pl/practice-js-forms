document.addEventListener('DOMContentLoaded', init);

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
    console.log(colorInRGBA);

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

const color = document.querySelector('[name="color"]');
color.addEventListener('change', changeColor);
const opacity = document.querySelector('[name="opacity"]');
opacity.addEventListener('mousemove', changeOpacity);

function changeColor(e) {
    const boxElement = document.querySelector('.box');
    let opacity = document.querySelector('[name="opacity"]').value;
    console.log(opacity);
    opacity = parseInt(opacity)/100;
    const newColor = e.target.value;
    setBoxShadow(boxElement, newColor, opacity);
}

function changeOpacity(e) {
    const boxElement = document.querySelector('.box');
    let color = document.querySelector('[name="color"]').value;
    const newOpacity = e.target.value / 100;
    console.log(newOpacity);
    setBoxShadow(boxElement, color, newOpacity);
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