document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    const colorEl = document.querySelector('input[type="color"]');
    const opacityEl = document.querySelector('input[type="range"]');
    setBoxShadow(boxElement, '#000000');

    colorEl.addEventListener('change', function(e){
        let color = e.target.value;
        // console.log(color);
        setBoxShadow(boxElement, color, opacityEl.value);
    });

    opacityEl.addEventListener('mousemove', function(e){
        // console.log(e.target.value);
        let opacity = e.target.value;
        setBoxShadow(boxElement, colorEl.value, opacity);
    });
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

// const color = document.querySelector('[name="color"]');
// const opacity = document.querySelector('[name="opacity"]');
// const box = document.querySelector('.box');
// console.log(color);
// console.log(opacity);
// console.log(box);

// color.addEventListener('change', function(el){
    // let color = el.target.value
    // let channel = el.target.value;
    // console.log(color);
    // console.log(channel);
    
// });