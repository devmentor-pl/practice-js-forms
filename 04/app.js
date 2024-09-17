document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}


const rangeEl = document.querySelector('input[name="opacity"]');
const colorEl = document.querySelector('input[name="color"]');
const box = document.querySelector(".box");

colorEl.addEventListener("change", function (e) {
	const color = e.target.value;
	setBoxShadow(box, color, rangeEl.value);
});

rangeEl.addEventListener("change", handleRangeValue);
rangeEl.addEventListener("mousemove", handleRangeValue);

function handleRangeValue(e) {
	const isMouseMoveEvent = e.type === "mousemove";
	const isMouseLeftButtonPress = e.buttons === 1;
	const rangeValue = e.target.value;

	if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
		setBoxShadow(box, colorEl.value, rangeValue * 0.01);
	}
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


