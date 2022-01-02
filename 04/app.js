document.addEventListener('DOMContentLoaded', init);

const boxElement = document.querySelector('.box');
const pannelEl = document.querySelector('.panel');
const inputColor = document.querySelector('input[name="color"]');
const inputRange = document.querySelector('input[name="opacity"]');

inputColor.addEventListener('change',function(){
    setBoxShadow(boxElement,getColorValue(),getOpacityValue());
});

inputRange.addEventListener('change',function(){
    setBoxShadow(boxElement,getColorValue(),getOpacityValue());
});

inputRange.addEventListener('mousemove',function(){
    setBoxShadow(boxElement,getColorValue(),getOpacityValue());
});

function getColorValue(){
    return inputColor.value;
}

function getOpacityValue(){
    return inputRange.value/100;
}

function init() {
    // const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity=1) {
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

    const channelColorHex = colorInHex.substr(start, 2); // substr(start,lenght) - Zwraca określoną liczbę początkowych znaków w łańcuchu znaków w określonej lokalizacji.
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec;
}