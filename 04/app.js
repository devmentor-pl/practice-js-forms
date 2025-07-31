document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const colorInput = boxElement.previousElementSibling.children[0];
    const rangeInput = boxElement.previousElementSibling.children[1];

    colorInput.addEventListener('change', function (e) {
        const colorValue = e.target.value;
        setBoxShadow(boxElement, colorValue, rangeInput.value)
    });
    rangeInput.addEventListener('mousemove', changeShadow);
    rangeInput.addEventListener('change', changeShadow);

    function changeShadow(e) {
        const isMouseMoveEvent = e.type === 'mousemove';
        const isMouseLeftButtonPress = e.buttons === 1;
        if (isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
            const rangeValue = e.target.value / 100;
            setBoxShadow(boxElement, colorInput.value, rangeValue);
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

