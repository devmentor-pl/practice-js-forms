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


const colorInputEl = document.querySelector('input[name = "color"]');

const opacityInputEl = document.querySelector('input[name = "opacity"]');
const boxElement = document.querySelector('.box');


colorInputEl.addEventListener('input', () => {
    const colorValue = colorInputEl.value;
    const opacityValue = opacityInputEl.value / 100;
    setBoxShadow(boxElement, colorValue, opacityValue);
});

opacityInputEl.addEventListener('input', () => {
    const colorValue = colorInputEl.value;
    const opacityValue = opacityInputEl.value / 100;
    setBoxShadow(boxElement, colorValue, opacityValue);
});




