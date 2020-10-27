document.addEventListener('DOMContentLoaded', init);

function init() {
    const selectorPanel = document.querySelector('.panel');

    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    selectorPanel.addEventListener('mousemove', changeBox);
    selectorPanel.addEventListener('change', changeBox);
}

function changeBox(e) {

    const colorInput = document.querySelector('input[name="color"]');
    const shadowInput = document.querySelector('input[name="opacity"]');
    const boxElement = document.querySelector('.box');

    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    if (
        isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent
    ) {


        const value = shadowInput.value;
        const opacity = value / 100;

        const colorInHex = colorInput.value;
        console.log(colorInHex);

        setBoxShadow(boxElement, colorInHex, opacity)
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