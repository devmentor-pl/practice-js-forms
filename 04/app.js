document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const colorElement = document.querySelector("[type='color']");
    const rangeElement = document.querySelector("[type='range']");

    colorElement.addEventListener("change", changeColor);
    rangeElement.addEventListener("change", changeOpacity);
    rangeElement.addEventListener("mousemove", changeOpacity);

}    

function changeColor(e) {
    const element = document.querySelector(".box");
    const color = e.target.value;
    const opacity = document.querySelector("[type='range']").value;

    setBoxShadow(element, color, opacity);
};

function changeOpacity (e) {
    const element = document.querySelector('.box');
    const color = document.querySelector("[type='color']").value;
    const isMouseMoveEvent = e.type === "mousemove";
    const isMouseLeftButtonPress = e.buttons === 1;
    let opacityValue;

    if(isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
        opacityValue = e.target.value / 100;
        setBoxShadow(element, color, opacityValue);
    };
};

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


