document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#00000');
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


// // SOLUTION

function getShadowValues() {
  // get box element
  const boxElement = document.querySelector('.box');
  // color
  const color = document.querySelector('input[name="color"]').value;
  // opacity
  const opacity = document.querySelector('input[name="opacity"]').value;

  // change color and opacity of box shadow
  setBoxShadow(boxElement, color, opacity*0.01);
};

// attach selector to the elements
document.querySelectorAll('.panel > input').forEach(item => {
  item.addEventListener('change', getShadowValues);
})
