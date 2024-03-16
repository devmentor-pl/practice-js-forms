//jak w nasłuchiwaniu ustawić konkretną zmianę wartości?

const colorChange = document.querySelector('[type="color"]');
const opacityChange = document.querySelector('[type="range"]');


document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

//ustawia cień
function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

//ustawia kolor
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

    console.log(colorInHex);
    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}

function getColor(e) {
    console.log(e.target.value);
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, e.target.value);
}

    colorChange.addEventListener('change', getColor);
    opacityChange.addEventListener('change', setBoxShadow);