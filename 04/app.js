document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

const boxElement = document.querySelector('.box');

function changeShadow(e){
    const colorEl = document.querySelector('[type = "color"]');
    const rangeEl = document.querySelector('[type = "range"]');
    const color = colorEl.value;
    const range = 1 - (rangeEl.value/100);
    console.log(color, range);
    setBoxShadow(boxElement, color, range);
    colorEl.addEventListener('change', changeShadow);
    rangeEl.addEventListener('change', changeShadow);
}
changeShadow(boxElement);

// drugie rozwiązanie, pierwsze podoba mi się bardziej, ale zostawiam oba

/*let newColorInHex = '#000000';
let newOpacity = 1;

function changeShadowColor(e) {
    newColorInHex = e.target.value;
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, newColorInHex, newOpacity);
}

function changeShadowOpacity(e) {
    newOpacity = 1 - (e.target.value/100);
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, newColorInHex, newOpacity);
}

const colorEl = document.querySelector('[type = "color"]');
const rangeEl = document.querySelector('[type = "range"]');

colorEl.addEventListener('change', changeShadowColor);
rangeEl.addEventListener('change', changeShadowOpacity);*/

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




