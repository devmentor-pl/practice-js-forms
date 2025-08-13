document.addEventListener('DOMContentLoaded', init);

const colorInHex = document.querySelector('input[name="color"]')
const opacity = document.querySelector('input[name="opacity"]')

// setBoxShadow jeśli change -> kolor cienia na box -> colorInHex -> zmiana na hex -> przekształcenie opacity na 0-1

colorInHex.addEventListener('change', () => {

    setBoxShadow(document.querySelector('.box'), colorInHex.value, opacity.value / 100)
}) 

// po mousemove zmiana opacity tj. przezroczystości 

opacity.addEventListener('mousemove', () => {
    setBoxShadow(document.querySelector('.box'), colorInHex.value, opacity.value / 100)
})

// po change zmiana opacity

opacity.addEventListener('change', () => {
    setBoxShadow(document.querySelector('.box'), colorInHex.value, opacity.value / 100)
})


function init() {
    const boxElement = document.querySelector('.box');
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

function updateShadow() {
    const color = colorInHexInput.value;
    const opacity = opacityInput.value / 100;
    setBoxShadow(boxElement, color, opacity);
}

