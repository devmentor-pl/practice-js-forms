document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const allInputs = document.querySelectorAll('input')
    allInputs.forEach(function (input) {
        input.addEventListener('change', newBoxShadow)
        if (input.type === 'range') {
            input.addEventListener('mousemove', newBoxShadow)
        }
    })
}

function newBoxShadow(e) {
    const parent = e.target.parentElement
    const boxElement = parent.nextElementSibling

    if (e.target.type === 'range') {
        sliderValue = (e.target.value / 100);
        
        const inputColor = e.target.previousElementSibling
        color = inputColor.value
    }

    if (e.target.type === 'color') {
        color = e.target.value
        
        const inputSlider = e.target.nextElementSibling
        sliderValue = (inputSlider.value / 100)
    }

    setBoxShadow(boxElement, color, sliderValue)
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


