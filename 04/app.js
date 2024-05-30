document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const colorPicker = document.querySelector('input[type="color"]');
    const opacitySlider = document.querySelector('input[name="opacity"]');

    let newColor = '#000000';
    let newOpacity = 1;

    colorPicker.addEventListener('change', function (e) {
        newColor = e.target.value;
        setBoxShadow(boxElement, newColor);
    });

    opacitySlider.addEventListener('change', setOpacity);
    opacitySlider.addEventListener('mousemove', setOpacity);

    function setOpacity(e) {
        newOpacity = e.target.value / 100;
        setBoxShadow(boxElement, newColor, newOpacity);
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


