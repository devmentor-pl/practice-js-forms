document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const rangeInput = document.querySelector('input[type="range"]');
    const colorInput = document.querySelector('input[type="color"]');
    const rangeInputEvents = ['mousemove', 'change'];

    colorInput.addEventListener('change', function (e) {
        rangeInput.valueAsNumber = 10;
        setBoxShadow(boxElement, e.target.value);
    });

    rangeInputEvents.forEach(function (el) {
        rangeInput.addEventListener(el, function (e) {
            const isMouseMoving = e.type === 'mousemove';
            const isMouseBtnActive = e.buttons === 1;
            if (isMouseMoving && isMouseBtnActive || !isMouseMoving) {
                setBoxShadow(boxElement, colorInput.value, e.target.valueAsNumber);
            };
        });
    });

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

