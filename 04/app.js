document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const colEl = document.querySelector('input[type=color]');
    const levelEl = document.querySelector('input[type=range]');
    
    colEl.addEventListener('change', function(){
        const color = colEl.value;
        setBoxShadow(boxElement , color);
    });

    levelEl.addEventListener('change', function(){
        const opacity = levelEl.value / 100;
        console.log(opacity);
    });

    setBoxShadow(boxElement, '#000000');
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


const rangeEl = document.querySelector('.panel');
console.log(fieldEl);


