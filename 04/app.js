document.addEventListener('DOMContentLoaded', init);


function init() {
    const boxElement = document.querySelector('.box');

    setBoxShadow(boxElement, '#000000');

    let colorHex = '#000000'
    let opacityColor = 1

    // listener to input color
    const inputColor = document.querySelector('[type="color"]')
    inputColor.addEventListener('change', function(e) {
        colorHex = e.target.value
        console.log('color',colorHex)
        setBoxShadow(boxElement, colorHex, opacityColor)
    })

    // listener to input range
    const inputRange = document.querySelector('[type="range"]')
    inputRange.addEventListener('change', function(e) {
        const rangeValue = e.target.value / 100
        console.log('range', e.target.value)
        console.log('opacity', rangeValue)
        opacityColor = rangeValue
        setBoxShadow(boxElement, colorHex, opacityColor)
    })
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











// test 
// ----------------------
// const col = '#010203'
// const sub1 = col.substr(1,2)
// console.log(sub1)
// const sub2 = col.substr(3,2)
// console.log(sub2)

// const hex = 'ff'
// const colDec = parseInt(hex, 16);
// console.log(colDec)







