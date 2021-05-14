document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
    getNewValues(boxElement, '#000000');
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

getNewValues = (boxElement, startedColor) => {
    const inputColor = document.getElementsByName('color')[0];
    const inputOpacity = document.getElementsByName('opacity')[0];

    let currColor = startedColor;
    let currOpacity = null;

    inputColor.addEventListener('change', e => {
        const newColor = e.target.value;
        currColor = newColor;
        changeShadow(boxElement, currColor, currOpacity)
    })

    inputOpacity.addEventListener('change', e => {
        const newOpacity = e.target.value/100;
        currOpacity = newOpacity;
        changeShadow(boxElement, currColor, currOpacity)
    })
}

changeShadow = (boxElement, currColor, currOpacity) => {
    if (!currOpacity) {
        setBoxShadow(boxElement, currColor);
    } else {
        setBoxShadow(boxElement, currColor, currOpacity);
    }
}




