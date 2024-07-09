document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
    const colorInput = document.querySelector('[type="color"]')
    const rangeInput = document.querySelector('[type="range"]')
    let color = colorInput.value

    //const section = document.querySelector('.panel')
    colorInput.addEventListener("change", (e) => {
        const value = e.target.value
        color = value
 setBoxShadow(boxElement, value)
    })
    rangeInput.addEventListener("change", (e) => {
        const value = e.target.value
        const convertedValue = (value - 100) * (-1) * 0.01
 setBoxShadow(boxElement, color, convertedValue)
    })
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


