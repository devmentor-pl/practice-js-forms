document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const colorEL = document.querySelector('[type="color"]');
    colorEL.addEventListener('change', changeColors);

    const opacityEl = document.querySelector('[type="range"]');
    opacityEl.addEventListener('mousemove', opacityValue);
    opacityEl.addEventListener('change', opacityValue);
}

function changeColors(e){
    const boxEl = document.querySelector('.box');
    const color = e.target.value;
    const opacity = document.querySelector('[name="opacity"]').value;
   
    setBoxShadow(boxEl, color, opacity);
}

function opacityValue(e){
    const boxEl = document.querySelector('.box');
    const isMouseMoveEvent = e.typ === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    const color = document.querySelector('[type="color"]').value;
    let opacity;

    if(isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
        opacity = e.target.value / 100;
    }

    setBoxShadow(boxEl, color, opacity);
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


