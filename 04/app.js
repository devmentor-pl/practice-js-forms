document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const colorInput = document.querySelector('[name=color]')
    const opacityInput = document.querySelector('[name=opacity]')

    colorInput.addEventListener('change', function() {
        setBoxShadow(boxElement, colorInput.value, opacityInput.value/100);
    });

    opacityInput.addEventListener('change', showValue);
    opacityInput.addEventListener('mousemove', showValue);

    function showValue(e) {
        const isMouseMoveEvent = e.type === 'mousemove';
        const isMouseLeftButtonPress = e.buttons === 1;

        if( isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
            setBoxShadow(boxElement, colorInput.value, opacityInput.value/100);
        }
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


