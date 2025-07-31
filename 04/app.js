document.addEventListener('DOMContentLoaded', init);


function init() {
    const boxElement = document.querySelector('.box');

    const colorInput = document.querySelector('input[type="color"]')
    const opacityInput = document.querySelector('input[type="range"]')

    colorInput.addEventListener('change', function () {
        setBoxShadow(boxElement, this.value);
    });
    opacityInput.addEventListener('input', function(){
        setBoxShadow(boxElement, colorInput.value, this.value / 100)
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


