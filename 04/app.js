document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const boxPanelColor = document.querySelector('input[type=color]');
    const boxPanelRange = document.querySelector('input[type=range]');
    
    setBoxShadow(boxElement, '#000000');

    boxPanelColor.addEventListener('change', function(){
        const color = boxPanelColor.value;
        setBoxShadow(boxElement, color, boxPanelRange.value / 100);
    })
    const handleChange = function(e){
        const opacity = boxPanelRange.value / 100;
        setBoxShadow(boxElement,boxPanelColor.value, opacity);
    }

    boxPanelRange.addEventListener('change', handleChange);
    boxPanelRange.addEventListener('mousemove', handleChange);

    
};

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
};


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
    };

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
};