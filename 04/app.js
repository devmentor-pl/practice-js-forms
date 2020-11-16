document.addEventListener('DOMContentLoaded', init);
const box = document.querySelector(".box");
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs[0].addEventListener("input", function(e) {
    var val = e.target.value;
    setBoxShadow(box, val);
    console.log(val);
});
inputs[1].addEventListener("change", function(e) {
    let opacityVal = e.target.value;
    let res = opacityVal / 100;
    setBoxShadow(box, inputs[0].value, res);
});


function init() { //funckja jaka zeruje suwak?
    const boxElement = document.querySelector('.box');//pobieram boxa
    setBoxShadow(boxElement, '#000000');//przypisuje do param.
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


