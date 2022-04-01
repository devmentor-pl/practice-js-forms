document.addEventListener('DOMContentLoaded', init);

function init() {
    const inputColor = document.querySelector('input[type="color"]');
    const inputRange = document.querySelector('input[type="range"]');
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    inputColor.addEventListener('change', changeColor.bind(this, boxElement)) ;
    inputRange.addEventListener('change', changeOpacity.bind(this, boxElement));
    inputRange.addEventListener('mousemove',changeOpacity.bind(this, boxElement));
}

function changeColor(element, e) {
            
    const boxShadow = element.style.boxShadow;
    const colorHex = e.target.value;
    const opacity = getOpacity(boxShadow);
    
    setBoxShadow(element, colorHex, opacity);     
}

function changeOpacity(element, e) {

    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    const boxShadow = element.style.boxShadow; 
    const colorHex = getHexColor(boxShadow);
    const opacity = e.target.value / 100;
        
    if( isMouseMoveEvent && isMouseLeftButtonPress || !isMouseMoveEvent) {
    
        setBoxShadow(element, colorHex, opacity);
    }
}

function getHexColor(boxShadow) {
    
    const start = boxShadow.indexOf('(')+1;
    const end = boxShadow.indexOf(')');    
    const rgbArray = (boxShadow.slice(start, end)).split(',');
    const hexArray = rgbArray.map(function(color) {                                                           
                                
                            if (color>9) {
                                return Number(color).toString(16);
                            }
                            else {
                                return '0'+Number(color).toString(16);
                            }
                        });
                        
    return '#'+hexArray[0].concat(hexArray[1],hexArray[2]);
}

function getOpacity(boxShadow) {
    
    if (boxShadow.includes('rgba')) {

        const start = boxShadow.lastIndexOf(',')+1;
        const end = boxShadow.lastIndexOf(')');
        const opacity = Number(boxShadow.slice(start, end));

        return opacity;        
    }
    
    return 1;
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


