//wszystko zrobione - tylko NIE DZIAŁA ustawienie cienia

const colorChange = document.querySelector('[type="color"]');
const opacityChange = document.querySelector('[type="range"]');

colorChange.addEventListener('change', getColor);
//setBoxShadow
//ustawiamy cień, przekazujemy argumenty do funkcji
opacityChange.addEventListener('change', setShadow);

document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

//ustawia cień
function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

//ustawia kolor
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

    // console.log(colorInHex);
    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}
//DZIAŁA
function getColor(e) {
    console.log(e.target.value);
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, e.target.value);
}
//NIE DZIAŁA ustawienie cienia
function setShadow(e) {
    console.log(e.target.value);
    const boxElement = document.querySelector('.box');
    const opacityValue = e.target.value / 100;
    setBoxShadow(boxElement, opacityValue);
}
