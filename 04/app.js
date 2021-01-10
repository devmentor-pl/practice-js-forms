document.addEventListener('DOMContentLoaded', init);  //?dev trochę się zatanawiam czemu akurat tak, ale w sumie okay - tzn. jest przejrzyście 

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const colorPickerEl = document.querySelector('[type="color"]');
    const eventPicker = colorPickerEl.addEventListener('change', getColor);
  //... jak to wywołać  
    console.log(eventPicker, boxElement, getColor)
    changeColor(boxElement, getColor);
}
function changeColor(boxElement, colorInHex) {
        setBoxShadow(boxElement, colorInHex);
}

function getColor(event) {
    const colorInHex = event.target.value;
    return colorInHex;
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


