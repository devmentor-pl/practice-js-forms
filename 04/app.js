const panel = document.querySelector('.panel');
const colorInput = panel.firstElementChild;
const rangeInput = panel.lastElementChild;
const box = document.querySelector('.box');

document.addEventListener('DOMContentLoaded', init);
rangeInput.addEventListener('mousemove', setRange);
rangeInput.addEventListener('change', setRange);
colorInput.addEventListener('change', function(e){
    const color = e.target.value;
    const opacity = rangeInput.value/100
    setBoxShadow(box, color, opacity);
});

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

function setRange(e){
    if(e.type === 'mousemove' && e.buttons === 1 
    || e.type !== 'mousemove'){
        const color = colorInput.value;
        const opacity = e.target.value/100;
        e.target.setAttribute('value', e.target.value);
        setBoxShadow(box, color, opacity)
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


