document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('czesc')
    const boxElement = document.querySelector('.box');
    const colorInput = document.querySelector('input[name=color]')
    const opacityInput = document.querySelector('input[name=opacity]');
    console.log(colorInput)
    colorInput.addEventListener('change',function(){
        setBoxShadow(boxElement, colorInput.value,opacityInput.value/100);
        console.log(colorInput);
    })
    
    opacityInput.addEventListener('change', function(){
        setBoxShadow(boxElement, colorInput.value, opacityInput.value/100);
    console.log(opacityInput)
    })
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


