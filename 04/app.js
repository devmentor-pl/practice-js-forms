document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const colorElement = document.querySelector("input[type=color]");
    const rangeElement = document.querySelector("input[type=range]");
    setBoxShadow(boxElement, "#000000");

    const handleChangeColor = () => {
      const color = colorElement.value;
      setBoxShadow(boxElement, color, rangeElement.value);
    };

    const handleChangeRange = () => {
      const opacity = rangeElement.value / 100;
      setBoxShadow(boxElement, colorElement.value, opacity);
    };

    colorElement.addEventListener("change", handleChangeColor);

    rangeElement.addEventListener("change", handleChangeRange);

    rangeElement.addEventListener("mousemove", handleChangeRange);


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


