document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const colorPicker = document.querySelector('input[type="color"]')
    const rangeSlider = document.querySelector('input[type="range"]')

    setBoxShadow(boxElement, '#000000');
    
    
    colorPicker.addEventListener('change', function(){
        const color = colorPicker.value;
        setBoxShadow(boxElement, color, rangeSlider.value / 100);
    })
    
    const handleChange = function(e){
        const opacity = rangeSlider.value / 100;
        setBoxShadow(boxElement, colorPicker.value, opacity);
    }
    
    rangeSlider.addEventListener('change', handleChange);
    rangeSlider.addEventListener('mousemove', handleChange);
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


